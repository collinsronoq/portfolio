import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  message: string;
};

// Basic in-memory rate limit (per server instance).
// Good enough for MVP; replace with Redis/Upstash in production if needed.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

const rateMap = new Map<string, { count: number; windowStart: number }>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
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

    // MVP behavior: log to server.
    // Later upgrade: send email via Resend/SendGrid using env vars.
    console.log("New portfolio contact submission:", {
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
      ip,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
