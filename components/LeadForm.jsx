"use client";
import { useState } from "react";

export default function LeadForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    setDone(false);

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setError(
          data?.message ||
            "Sorry—something went wrong sending your request. Please try again."
        );
        setSending(false);
        return;
      }

      // GA4 event (fires only on success)
      if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
        window.gtag("event", "lead_form_submit", {
          event_category: "Lead",
          event_label: "Hero Form",
          value: 1,
          currency: "USD",
        });
      }

      setDone(true);
      setSending(false);
      form.reset();
    } catch (err) {
      setError(
        "Network error submitting the form. Please check your connection and try again."
      );
      setSending(false);
    }
  }

  const inputBase =
    "mt-1 w-full rounded-xl border border-bronze-300 bg-white text-gray-900 placeholder-gray-500 px-4 py-3 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 outline-none";
  const selectBase =
    "mt-1 w-full rounded-xl border border-bronze-300 bg-white text-gray-900 px-4 py-3 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-live="polite">
      <div>
        <label className="text-sm font-medium text-navy-900">Your name</label>
        <input name="name" required className={inputBase} />
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">Work email</label>
        <input name="email" type="email" required className={inputBase} />
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">
          Company (optional)
        </label>
        <input name="company" className={inputBase} />
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">Room size</label>
        <select name="roomSize" required className={selectBase} defaultValue="">
          <option value="" disabled>
            Select room size
          </option>
          <option value="8–12 (Essential — $2,500)">
            8–12 people (Essential — $2,500)
          </option>
          <option value="12–20 (Professional — $4,500)">
            12–20 people (Professional — $4,500)
          </option>
          <option value="20+ (Enterprise — $8,000)">
            20+ people (Enterprise — $8,000)
          </option>
          <option value="Multiple rooms">Multiple rooms</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">Timeline</label>
        <select name="timeline" required className={selectBase} defaultValue="">
          <option value="" disabled>
            When do you need this?
          </option>
          <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="1–3 months">1–3 months</option>
          <option value="Planning ahead">Just planning ahead</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">
          Notes (optional)
        </label>
        <textarea
          name="notes"
          rows={5}
          className={inputBase}
          placeholder="Anything we should know? Current gear, room dimensions, must-haves…"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {done && (
        <p className="text-sm text-green-700">
          Thanks! We received your request and will reply within 4 business
          hours.
        </p>
      )}

      <button
        disabled={sending}
        className="w-full rounded-xl bg-brand-teal px-6 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-brand-sage-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? "Submitting…" : "Get My Fixed-Price Quote"}
      </button>
    </form>
  );
}
