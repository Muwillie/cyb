"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-[4px] border border-[#2B3B52] bg-[#0A121D] px-4 py-3 text-sm text-white placeholder:text-[#5A6B80] focus:border-[#5FB8B0] focus:outline-none";

type Status = "idle" | "submitting" | "submitted" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      organisation: String(data.get("organisation") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      topic: String(data.get("topic") ?? ""),
      message: String(data.get("message") ?? ""),
      // Honeypot — left empty by real users, hidden via CSS below.
      website: String(data.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.error || "Something went wrong. Please try again.");
      }

      setStatus("submitted");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "submitted") {
    return (
      <div className="rounded-[6px] border border-[#2B3B52] bg-[#121D2E] p-8">
        <p className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
          Message received
        </p>
        <p className="mt-3 text-[#154481]">
          Thanks — an analyst will get back to you within one business day. For anything urgent, call our incident
          line above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot field — hidden from real users, left in the tab order for bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-white">
            Full name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="organisation" className="text-sm font-medium text-white">
            Organisation
          </label>
          <input id="organisation" name="organisation" type="text" required className={inputClasses} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-white">
            Work email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-white">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="topic" className="text-sm font-medium text-white">
          What do you need help with?
        </label>
        <select id="topic" name="topic" className={inputClasses} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="mdr">Managed Detection & Response</option>
          <option value="pentest">Penetration Testing</option>
          <option value="ir">Incident Response — active incident</option>
          <option value="compliance">Compliance & Risk Advisory</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-white">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
      </div>

      {status === "error" && errorMessage ? (
        <p className="rounded-[4px] border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-[4px] bg-[#E8A33D] px-6 py-3 text-sm font-semibold text-[#0A121D] transition-colors hover:bg-[#f0b660] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}