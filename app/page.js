// app/page.js
import Image from "next/image";

// ---------- Inline client component: Lead Form ----------
function LeadFormCard() {
  "use client";
  const [sending, setSending] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const [err, setErr] = React.useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setErr("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submit failed");
      // optional GA4 event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "lead_submit", {
          event_category: "Leads",
          event_label: "Hero Lead Form",
          value: 1,
        });
      }
      setOk(true);
    } catch (e) {
      setErr("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (ok) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl border-2 border-brand-teal text-center">
        <div className="text-3xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Got it!</h3>
        <p className="text-gray-600">
          We’ll email you a fixed-price quote within 4 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl border-2 border-brand-teal"
    >
      <div className="text-center mb-4">
        <div className="inline-block bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
          ⚡ 3 SLOTS LEFT IN NOVEMBER
        </div>
        <h3 className="text-xl font-bold text-gray-900">Get Your Fixed-Price Quote</h3>
        <p className="text-sm text-gray-600 mt-1">Reply in ~4 hours • No obligation</p>
      </div>

      <div className="grid gap-3">
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Work Email"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none"
        />
        <input
          name="company"
          placeholder="Company"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none"
        />
        <select
          name="room_size"
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none text-gray-700"
        >
          <option value="">Select Room Size</option>
          <option value="8-12">8–12 people (Essential – $2,500)</option>
          <option value="12-20">12–20 people (Professional – $4,500)</option>
          <option value="20+">20+ people (Enterprise – $8,000)</option>
          <option value="multiple">Multiple rooms</option>
          <option value="unsure">Not sure yet</option>
        </select>
        <select
          name="timeline"
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none text-gray-700"
        >
          <option value="">When do you need this?</option>
          <option value="asap">ASAP (≤ 2 weeks)</option>
          <option value="1-month">Within 1 month</option>
          <option value="1-3-months">1–3 months</option>
          <option value="planning">Just planning</option>
        </select>
        <textarea
          name="notes"
          rows={3}
          placeholder="Anything specific we should know?"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-4 w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-bold py-3 rounded-lg transition-colors shadow-lg disabled:opacity-60"
      >
        {sending ? "Sending…" : "Get My Quote →"}
      </button>

      <p className="text-xs text-gray-500 text-center mt-3">
        ✓ 14-day free revisions • ✓ 100% deposit refund if not satisfied
      </p>

      {err && <p className="text-red-600 text-sm text-center mt-2">{err}</p>}

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 mb-2">Prefer to talk?</p>
        <a
          href="https://calendly.com/mark-callordut/30min"
          className="text-brand-teal hover:underline font-semibold text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a call instead →
        </a>
      </div>
    </form>
  );
}

// React import for the client component above
import * as React from "react";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-brand-beige border-b border-brand-sage sticky top-0 z-50">
        <div className="container-custom py-3 flex items-center justify-between">
          <a href="https://callordut.com" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CalLord Unified Technologies"
              width={360}
              height={110}
              priority
              className="h-auto w-auto"
            />
          </a>
          <a
            href="#lead"
            className="btn-primary text-sm md:text-base"
          >
            Get My Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
        <div className="container-custom">
          {/* Urgency banner */}
          <div className="bg-red-600/90 text-white py-2 px-4 text-center text-sm font-semibold rounded-lg mb-6">
            ⏰ November slots filling fast — 3 design projects remaining this month
          </div>

          {/* Trust bar ABOVE headline */}
          <div className="text-center mb-6">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span><strong>87</strong> rooms designed</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span><strong>4.9/5</strong> average rating</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Trusted by multi-site facilities</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Professional Conference Room Design—Delivered in 3–7 Days
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Complete D-Tools documentation, equipment specifications, signal-flow diagrams,
              and installation guidance. 100% remote. Nationwide.
            </p>
          </div>

          {/* Lead form */}
          <div id="lead" className="mt-6">
            <LeadFormCard />
          </div>

          <p className="mt-6 text-white/80 text-center text-sm">
            Fixed pricing. No surprises. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing (anchor only; content already exists in your file) */}
      <section id="pricing" className="section-padding bg-brand-beige">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Three Service Tiers. Fixed Pricing.
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Choose the package that fits your room size and complexity.
            All include complete D-Tools documentation and installation guidance.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-10 max-w-2xl mx-auto">
            <p className="text-sm text-gray-700">
              <strong>⚡ Year-End Rush:</strong> Book by Nov 20 to guarantee pre-holiday delivery.
            </p>
          </div>

          {/* Keep your existing tier cards here, unchanged */}
          <p className="text-gray-600">
            (Your pricing cards render here — unchanged.)
          </p>
        </div>
      </section>

      {/* Testimonials (placeholder content) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Facility Managers Say
            </h2>
            <p className="text-lg text-gray-600">Real results from real projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
              <div className="text-brand-teal mb-2 text-2xl">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                “We used Mark’s D-Tools specs to get three competitive bids and saved $11,000.
                Install finished in two days.”
              </p>
              <div className="border-t border-brand-sage pt-3">
                <p className="font-semibold text-gray-900">Tom R.</p>
                <p className="text-sm text-gray-600">Facilities Director, Consulting Firm</p>
              </div>
            </div>

            <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
              <div className="text-brand-teal mb-2 text-2xl">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                “Got our design in 4 days. No more HDMI treasure hunts—everything just works.
                Best $4,500 we spent this year.”
              </p>
              <div className="border-t border-brand-sage pt-3">
                <p className="font-semibold text-gray-900">Sarah C.</p>
                <p className="text-sm text-gray-600">IT Manager, Tech Company</p>
              </div>
            </div>

            <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
              <div className="text-brand-teal mb-2 text-2xl">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                “Finally a designer who understands Crestron and network security. Our installer
                said the documentation was flawless.”
              </p>
              <div className="border-t border-brand-sage pt-3">
                <p className="font-semibold text-gray-900">David M.</p>
                <p className="text-sm text-gray-600">Operations VP, Manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Design Your Conference Room?
          </h2>
          <a href="#lead" className="btn-primary bg-white text-brand-teal hover:bg-brand-beige text-lg inline-block">
            Get Your Fixed-Price Quote
          </a>
          <p className="mt-4 text-white/85">
            Or call us: <a href="tel:+15052261457" className="font-semibold underline">(505) 226-1457</a>
          </p>
        </div>
      </section>

      {/* Footer stays as-is in your project */}
    </>
  );
}
