"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ronocollins254@gmail.com";
const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/collinsronoq";
const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  "https://www.linkedin.com/in/collins-rono-65306623a/";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const formLoadedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          formLoadedAt: formLoadedAt.current,
        }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error || "Submission failed. Please try again.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-14 md:py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold font-mono tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
              Contact
            </h2>
            <p className="mt-3 text-base leading-relaxed font-mono text-gray-600 dark:text-gray-400">
              If you want to collaborate, hire me, or discuss a project idea,
              send a message here. Email is the fastest channel.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium font-mono text-white hover:bg-indigo-700"
              >
                Email me
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium font-mono text-gray-800 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
              >
                GitHub
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium font-mono text-gray-800 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <Card>
              <h3 className="text-lg font-semibold tracking-tight font-mono text-gray-900 dark:text-gray-100">
                Send a message
              </h3>

              <form onSubmit={onSubmit} className="mt-5 space-y-4">
                <div aria-hidden="true" className="sr-only">
                  <label className="text-sm font-medium text-gray-900 font-mono dark:text-gray-100">
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, company: e.target.value }))
                    }
                    tabIndex={-1}
                    autoComplete="off"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-mono text-gray-900 outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100"
                    placeholder="Company"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-900 font-mono dark:text-gray-100">
                      Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                    required
                    minLength={2}
                    maxLength={120}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-mono text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-950"
                    placeholder="Your name"
                  />
                  </div>

                  <div>
                    <label className="text-sm font-medium font-mono text-gray-900 dark:text-gray-100">
                      Email
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      required
                      type="email"
                      maxLength={200}
                      className="mt-2 w-full rounded-xl font-mono border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-950"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium font-mono text-gray-900 dark:text-gray-100">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={6}
                    className="mt-2 w-full rounded-xl font-mono border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-950"
                    placeholder="Tell me what you want to build or discuss..."
                  />
                </div>

                {status === "error" ? (
                  <p className="text-sm font-medium font-mono text-red-600 dark:text-red-400">
                    {error}
                  </p>
                ) : null}

                {status === "success" ? (
                  <p className="text-sm font-medium font-mono text-emerald-700 dark:text-emerald-400">
                    Message sent successfully. I will get back to you.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center font-mono justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                </button>

                {/* <p className="text-xs text-gray-500 dark:text-gray-500">
                  This form currently logs submissions on the server for MVP
                  testing. We will connect it to an email provider next.
                </p> */}
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
