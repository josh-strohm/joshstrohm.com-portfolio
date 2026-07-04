"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  if (status === "success") {
    return (
      <div
        className="crosshair-corners rounded-[var(--radius-card)] bg-surface p-8 md:p-10"
        role="status"
      >
        <p className="font-mono-label mb-3 text-accent">Message sent</p>
        <p className="font-display text-xl font-semibold text-text">
          Thanks — I&apos;ll be in touch within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono-label text-text2 link-underline transition-colors hover:text-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="crosshair-corners flex flex-col gap-6 rounded-[var(--radius-card)] bg-surface p-8 md:p-10"
      noValidate
    >
      <div>
        <label htmlFor="name" className="font-mono-label mb-2 block text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-[var(--radius-button)] border border-border bg-surface2 px-4 py-3 text-text transition-colors placeholder:text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono-label mb-2 block text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-[var(--radius-button)] border border-border bg-surface2 px-4 py-3 text-text transition-colors placeholder:text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono-label mb-2 block text-muted"
        >
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-[var(--radius-button)] border border-border bg-surface2 px-4 py-3 text-text transition-colors placeholder:text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
          placeholder="Describe the problem you're trying to solve..."
        />
      </div>

      {status === "error" && (
        <p className="font-mono-label text-red-400" role="alert">
          Something went wrong. Email me directly at {site.email}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-[var(--radius-button)] bg-accent px-6 py-3 text-sm font-medium text-bg transition-all duration-150 hover:brightness-110 disabled:opacity-60 motion-reduce:transition-none"
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}