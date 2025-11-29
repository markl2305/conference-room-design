"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you install equipment or just design?",
    a: "We design and coordinate. We partner with your preferred installer or help you select one locally. Our documentation is installer-ready and we stay involved through testing.",
  },
  {
    q: "What if we already have gear in the room?",
    a: "Great. We reuse what makes sense, note gaps, and standardize controls. The blueprint outlines keep/replace recommendations with good/best options.",
  },
  {
    q: "How long does this actually take?",
    a: "Blueprints are typically 3–7 days. Design + Remote PM projects run 3–21 days depending on installer availability and procurement.",
  },
  {
    q: "Do you only work with Zoom and Teams?",
    a: "Zoom and Teams are primary. We design for mixed Mac/PC environments and can accommodate other platforms with clear guidance.",
  },
  {
    q: "What size firms do you work with?",
    a: "Professional services firms with 10–75 employees and 1–3 conference rooms. Enough complexity to matter, small enough to stay nimble.",
  },
  {
    q: "How do you work with our IT or existing vendors?",
    a: "We collaborate. We’ll align with your IT/security requirements, coordinate with vendors, and keep documentation clear so everyone moves faster.",
  },
];

export default function SmartRoomFAQ() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-8 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Smart Room FAQs</h2>
          <p className="text-gray-700 text-lg">
            Straight answers to the most common questions we get from partners and ops leads.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <AccordionItem key={item.q} {...item} defaultOpen={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-900 font-semibold"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <span className="text-[#279A92]">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-gray-700 leading-relaxed text-sm md:text-base">{a}</div>}
    </div>
  );
}
