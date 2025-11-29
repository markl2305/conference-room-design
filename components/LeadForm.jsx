// components/LeadForm.jsx
"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    const form = e.currentTarget;
    const payload = {
      source: "hero_lead_form",
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      roomSize: form.roomSize.value,
      timeline: form.timeline.value,
      notes: form.notes.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || `Request failed: ${res.status}`);
      }

      setMsg({ type: "success", text: "Thanks—your message was sent." });
      form.reset();
    } catch (err) {
      setMsg({ type: "error", text: err?.message || "Email could not be sent." });
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    "border rounded p-2 bg-white text-slate-900 placeholder-slate-500 " +
    "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 " +
    "dark:bg-white dark:text-slate-900";

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-xl text-slate-900 dark:text-slate-100">
      <div className="grid grid-cols-2 gap-3">
        <input name="firstName" placeholder="First name*" required className={inputCls} />
        <input name="lastName" placeholder="Last name*" required className={inputCls} />
      </div>
      <input type="email" name="email" placeholder="Email*" required className={inputCls} />
      <input name="company" placeholder="Company" className={inputCls} />
      <select name="roomSize" className={inputCls}>
        <option value="">Room size</option>
        <option>Huddle (2–4)</option>
        <option>Small (4–6)</option>
        <option>Medium (6–10)</option>
        <option>Large (10–20)</option>
        <option>Boardroom / Training</option>
      </select>
      <select name="timeline" className={inputCls}>
        <option value="">Timeline</option>
        <option>ASAP (0–2 weeks)</option>
        <option>Soon (2–4 weeks)</option>
        <option>Planning (1–3 months)</option>
        <option>Exploring (3+ months)</option>
      </select>
      <textarea
        name="notes"
        rows={4}
        placeholder="Anything else we should know?"
        className={inputCls}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white rounded p-2 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get my fixed-price quote"}
      </button>

      {msg && (
        <p
          className={
            msg.type === "success"
              ? "text-green-700 dark:text-green-400"
              : "text-red-700 dark:text-red-400"
          }
        >
          {msg.text}
        </p>
      )}
    </form>
  );
}
