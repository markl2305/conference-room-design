"use client";

import { useState } from "react";

export default function LeadForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "lead", // distinguish from simple contact form if you add one later
          ...data,
        }),
      });

      if (res.ok) {
        // GA4 event (safe-guarded)
        if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
          window.gtag("event", "lead_form_submit", {
            event_category: "Lead",
            event_label: "Hero Lead Form",
            value: 1.0,
            currency: "USD",
          });
        }

        // brief delay to let GA4 fire
        setTimeout(() => {
          window.location.href = "/thanks";
        }, 300);
      } else {
        const text = await res.text();
        setError(text || "Something went wrong. Please try again.");
        setSending(false);
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setSending(false);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl border-2 border-brand-teal">
      <div className="text-center mb-4">
        <div className="inline-block bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
          ⚡ 3 SLOTS LEFT IN NOVEMBER
        </div>
        <h3 className="text-xl font-bold text-gray-900">Get Your Fixed-Price Quote</h3>
        <p className="text-sm text-gray-600 mt-1">Hear back within 4 hours • No obligation</p>
      </div>

      <form onSubmit={submit} className="space-y-3">
        <div>
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none"
          />
        </div>

        <div>
          <input
            name="company"
            placeholder="Company Name"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none"
          />
        </div>

        <div>
          <select
            name="room_size"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none text-gray-700"
          >
            <option value="">Select Room Size</option>
            <option value="8-12">8-12 people (Essential - $2,500)</option>
            <option value="12-20">12-20 people (Professional - $4,500)</option>
            <option value="20+">20+ people (Enterprise - $8,000)</option>
            <option value="multiple">Multiple rooms</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>

        <div>
          <select
            name="timeline"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none text-gray-700"
          >
            <option value="">When do you need this?</option>
            <option value="asap">ASAP (within 2 weeks)</option>
            <option value="1-month">Within 1 month</option>
            <option value="1-3-months">1-3 months</option>
            <option value="planning">Just planning ahead</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "Sending…" : "Get My Quote →"}
        </button>

        <p className="text-xs text-gray-500 text-center mt-2">
          ✓ No credit card required • ✓ Response in 4 hours • ✓ 14-day revision guarantee
        </p>
      </form>

      {error ? (
        <p className="mt-3 text-sm text-red-600 text-center">{error}</p>
      ) : null}

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 mb-2">Or</p>
        <a
          href="https://calendly.com/mark-callordut/30min"
          className="text-brand-teal hover:underline font-semibold text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a call instead →
        </a>
      </div>
    </div>
  );
}
