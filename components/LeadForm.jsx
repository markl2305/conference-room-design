"use client";

import { useState } from "react";

export default function LeadForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    setSending(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // if server returns JSON with error, show it
      let payload = {};
      try {
        payload = await res.json();
      } catch {
        /* ignore */
      }

      if (!res.ok) {
        throw new Error(payload?.error || "Request failed.");
      }

      // GA4 (best-effort)
      if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
        window.gtag("event", "lead_form_submit", {
          event_category: "Lead",
          event_label: "Hero Lead Form",
          value: 1,
          currency: "USD",
        });
      }

      window.location.href = "/thanks";
    } catch (err) {
      setError(
        err?.message ||
          "Sorry—something went wrong sending your request. Please try again."
      );
      setSending(false);
    }
  }

  const baseInput =
    "mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 " +
    "text-gray-900 placeholder-gray-500 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal";

  return (
    <form onSubmit={submit} className="grid gap-4 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl">
      <div>
        <label className="text-sm font-medium text-gray-900">Your name</label>
        <input name="name" required placeholder="Jane Smith" className={baseInput} />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900">Work email</label>
        <input name="email" type="email" required placeholder="jane@company.com" className={baseInput} />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900">Company (optional)</label>
        <input name="company" placeholder="Acme Corp" className={baseInput} />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900">Room size</label>
        <select name="room_size" required className={baseInput}>
          <option value="">Select room size</option>
          <option value="8-12">8–12 people (Essential – $2,500)</option>
          <option value="12-20">12–20 people (Professional – $4,500)</option>
          <option value="20+">20+ people (Enterprise – $8,000)</option>
          <option value="multiple">Multiple rooms</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900">Timeline</label>
        <select name="timeline" required className={baseInput}>
          <option value="">When do you need this?</option>
          <option value="asap">ASAP (within 2 weeks)</option>
          <option value="1-month">Within 1 month</option>
          <option value="1-3-months">1–3 months</option>
          <option value="planning">Just planning ahead</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900">Notes (optional)</label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Room dimensions, displays, mics, special constraints…"
          className={baseInput}
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="rounded-xl bg-brand-teal px-6 py-3 font-semibold text-white shadow-lg hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? "Sending…" : "Get My Fixed-Price Quote"}
      </button>

      <p className="text-xs text-gray-600 text-center">
        You’ll hear back within 4 business hours. No obligation.
      </p>
    </form>
  );
}
