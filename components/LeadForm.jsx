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

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-xl">
      <div className="grid grid-cols-2 gap-3">
        <input name="firstName" placeholder="First name*" required className="border rounded p-2" />
        <input name="lastName" placeholder="Last name*" required className="border rounded p-2" />
      </div>
      <input type="email" name="email" placeholder="Email*" required className="border rounded p-2" />
      <input name="company" placeholder="Company" className="border rounded p-2" />
      <select name="roomSize" className="border rounded p-2">
        <option value="">Room size</option>
        <option>Huddle (2–4)</option>
        <option>Small (4–6)</option>
        <option>Medium (6–10)</option>
        <option>Large (10–20)</option>
        <option>Boardroom / Training</option>
      </select>
      <select name="timeline" className="border rounded p-2">
        <option value="">Timeline</option>
        <option>ASAP (0–2 weeks)</option>
        <option>Soon (2–4 weeks)</option>
        <option>Planning (1–3 months)</option>
        <option>Exploring (3+ months)</option>
      </select>
      <textarea name="notes" placeholder="Anything else we should know?" rows={4} className="border rounded p-2" />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white rounded p-2 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get my fixed-price quote"}
      </button>

      {msg && (
        <p className={msg.type === "success" ? "text-green-700" : "text-red-700"}>
          {msg.text}
        </p>
      )}
    </form>
  );
}
