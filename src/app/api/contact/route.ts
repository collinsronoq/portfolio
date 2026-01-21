import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  name: string;
  email: string;
  message: string;
  company?: string;       // honeypot
  formLoadedAt?: number;  // client timestamp
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

const rateMap = new Map<string, { count: number; windowStart: number }>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  const xri = req.headers.get("x-real-ip");
  if (xri) return xri.trim();
  return "unknown";
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const now = Date.now();

    const entry = rateMap.get(ip);
    if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateMap.set(ip, { count: 1, windowStart: now });
    } else {
      if (entry.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { ok: false, error: "Too many requests. Please try again shortly." },
          { status: 429 }
        );
      }
      entry.count += 1;
      rateMap.set(ip, entry);
    }

    const body = (await req.json()) as Partial<Payload>;

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    const company = (body.company || "").trim();
    const formLoadedAt =
      typeof body.formLoadedAt === "number" ? body.formLoadedAt : undefined;

    // --- Anti-spam (silent success) ---
    if (company.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }
    if (formLoadedAt && Date.now() - formLoadedAt < 1500) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // --- Validation ---
    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Message is too short (min 10 characters)." },
        { status: 400 }
      );
    }

    if (message.length > 3000) {
      return NextResponse.json(
        { ok: false, error: "Message is too long (max 3000 characters)." },
        { status: 400 }
      );
    }

    // --- Resend config ---
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX || "[Portfolio]";

    if (!apiKey || !toEmail || !fromEmail) {
      // Misconfiguration: do not expose internals
      console.error("Contact route misconfigured: missing env vars");
      return NextResponse.json(
        { ok: false, error: "Service temporarily unavailable. Please try again." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const receivedAt = new Date().toISOString();
    const subject = `${subjectPrefix} New message from ${name}`;

    const textBody =
      `New portfolio contact submission\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Received: ${receivedAt}\n` +
      `IP: ${ip}\n\n` +
      `Message:\n${message}\n`;

    const htmlBody =
      `<h2>New portfolio contact submission</h2>` +
      `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
      `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
      `<p><strong>Received:</strong> ${escapeHtml(receivedAt)}</p>` +
      `<p><strong>IP:</strong> ${escapeHtml(ip)}</p>` +
      `<hr/>` +
      `<pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Monaco,Consolas,monospace;">${escapeHtml(message)}</pre>`;

    // Send one email to you, set replyTo to visitor
    await resend.emails.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// Minimal HTML escaping for safe HTML email rendering
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
