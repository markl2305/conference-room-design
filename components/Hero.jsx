// components/Hero.jsx
"use client";

import { useState } from "react";

const bullets = [
  "Fixed pricing. No surprises. No equipment sales conflict.",
  "D-Tools Pro package: rack elevations, cable schedules, and as-built docs.",
  "Vendor-neutral specs so you can bid competitively or DIY.",
  "14-day revision guarantee. Response within 4 business hours.",
];

// Tiny SVG placeholder if /images/hero-room.jpg isn’t present
const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'>
  <defs>
    <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='#0f766e'/>
      <stop offset='100%' stop-color='#115e59'/>
    </linearGradient>
  </defs>
  <rect width='1200' height='600' fill='url(#g)'/>
  <g fill='rgba(255,255,255,0.18)'>
    <rect x='120' y='180' width='960' height='300' rx='16'/>
    <rect x='170' y='220' width='300' height='12' rx='6'/>
    <rect x='170' y='246' width='220' height='12' rx='6'/>
    <rect x='170' y='272' width='260' height='12' rx='6'/>
    <rect x='170' y='298' width='180' height='12' rx='6'/>
  </g>
</svg>`);

export default function Hero() {
  const [src, setSrc] = useState("/images/hero-room.png");

  return (
    <section className="bg-teal-700 text-teal-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left column (headline + bullets + media) */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-amber-300">
                87 rooms designed • 4.9/5 avg rating • Nationwide
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Professional Conference Room Design — Delivered in 3–7 Days
              </h1>
              <p className="mt-3 text-base leading-7 text-teal-50/95">
                Complete D-Tools documentation, equipment specifications, signal flow diagrams, and
                installation guidance. 100% remote delivery.
              </p>
            </div>

            {/* Bullets */}
            <ul className="mt-6 space-y-3 text-base leading-7 text-teal-50/95">
              {bullets.map((t) => (
                <li key={t} className="flex gap-3 pl-1">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-300 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {/* Media block under bullets */}
            <div className="mt-8">
              <figure className="rounded-xl overflow-hidden shadow-lg shadow-teal-950/20 ring-1 ring-white/10">
                <img
                  src={src}
                  onError={() => setSrc(FALLBACK)}
                  alt="Recent conference room design delivered in 5 days"
                  className="w-full h-56 md:h-72 object-cover"
                  loading="eager"
                />
              </figure>
              <figcaption className="mt-2 text-sm text-teal-100/80">
                Example deliverable: signal-flow diagram + rack elevations + cable schedule.
              </figcaption>
            </div>
          </div>

          {/* Right column (form) */}
          <div className="lg:col-span-5">
            <div id="quote" className="rounded-xl bg-white/95 p-5 sm:p-6 shadow-xl ring-1 ring-teal-900/10">
              <form className="grid grid-cols-1 gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="First name*" className="rounded-md border border-teal-900/10 px-3 py-2 text-sm text-teal-950 placeholder-teal-800/50" />
                  <input type="text" placeholder="Last name*" className="rounded-md border border-teal-900/10 px-3 py-2 text-sm text-teal-950 placeholder-teal-800/50" />
                </div>
                <input type="email" placeholder="Email*" className="rounded-md border border-teal-900/10 px-3 py-2 text-sm text-teal-950 placeholder-teal-800/50" />
                <input type="text" placeholder="Company" className="rounded-md border border-teal-900/10 px-3 py-2 text-sm text-teal-950 placeholder-teal-800/50" />
                <div className="grid grid-cols-2 gap-3">
                  <select className="rounded-md border border-teal-900/10 px-3 py-2 text-sm text-teal-950">
                    <option>Room size</option>
                    <option>8–12</option>
                    <option>12–20</option>
                    <option>20+</option>
                  </select>
                  <select className="rounded-md border border-teal-900/10 px-3 py-2 text-sm text-teal-950">
                    <option>Timeline</option>
                    <option>3–5 days</option>
                    <option>5–7 days</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <textarea placeholder="Anything else we should know?" className="rounded-md border border-teal-900/10 px-3 py-2 text-sm text-teal-950 placeholder-teal-800/50 min-h-[96px]" />
                <button type="submit" className="mt-2 w-full rounded-lg bg-teal-700 py-2.5 text-white font-semibold hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
                  Get my fixed-price quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
