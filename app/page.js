import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Professional Conference Room Design | CalLord Unified Technologies",
  description:
    "Fixed-price remote conference room design delivered in 3–7 days. D-Tools documentation, signal flow, rack elevations, and cable schedules—ready for your installer.",
};

export default function Page() {
  return (
    <main>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal to-brand-sage text-white">
        <div className="container-custom section-padding">
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
                <span>Trusted by enterprise & SMB</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: logo + headline */}
            <div>
              <Link
                href="https://callordut.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6"
              >
                <Image
                  src="/logo.png"
                  alt="CalLord Unified Technologies"
                  width={480}
                  height={270}
                  priority
                  className="h-auto w-auto max-w-[320px] md:max-w-[420px]"
                />
              </Link>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                Professional Conference Room Design—Delivered in 3–7 Days
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Vendor-neutral, fixed-price design packages with D-Tools documentation.
                Start procurement quickly and install with confidence.
              </p>

              {/* Mini trust badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-sm">
                  100% Remote
                </span>
                <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-sm">
                  D-Tools Docs
                </span>
                <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-sm">
                  Nationwide
                </span>
                <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-sm">
                  Fixed Pricing
                </span>
              </div>
            </div>

            {/* Right: Primary conversion (form) */}
            <div>
              <LeadForm />
              <p className="mt-3 text-center text-white/90 text-sm">
                Prefer to talk instead?{" "}
                <a
                  className="underline font-semibold"
                  href="https://calendly.com/mark-callordut/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a call
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Facility Managers Say
            </h2>
            <p className="text-xl text-gray-600">Real results from real projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
              <div className="text-brand-teal mb-3 text-2xl">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                “D-Tools specs let us get 3 competitive bids. We saved over $10k
                and the install was smooth.”
              </p>
              <div className="border-t border-brand-sage pt-4">
                <p className="font-semibold text-gray-900">Tom R.</p>
                <p className="text-sm text-gray-600">Facilities Director</p>
              </div>
            </div>

            <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
              <div className="text-brand-teal mb-3 text-2xl">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                “Got our design in four days. No more HDMI treasure hunts—everything just works.”
              </p>
              <div className="border-t border-brand-sage pt-4">
                <p className="font-semibold text-gray-900">Sarah C.</p>
                <p className="text-sm text-gray-600">IT Manager</p>
              </div>
            </div>

            <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
              <div className="text-brand-teal mb-3 text-2xl">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                “Documentation was flawless—our installer said it was the best package he’s seen.”
              </p>
              <div className="border-t border-brand-sage pt-4">
                <p className="font-semibold text-gray-900">David M.</p>
                <p className="text-sm text-gray-600">Operations VP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRICING (with risk reversal) ===================== */}
      <section id="pricing" className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fixed Pricing. No Surprises.
            </h2>
            <p className="text-gray-700">
              Choose the room size and delivery speed that fits your needs. Every package includes
              D-Tools documentation, signal flow, rack elevations, and cable schedules.
            </p>
          </div>

          {/* Year-end note / urgency copy (non-dynamic) */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-10 max-w-2xl mx-auto">
            <p className="text-sm text-gray-700">
              <strong>⚡ Year-End Rush:</strong> Book by Nov 20 to guarantee pre-holiday delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Essential */}
            <div className="rounded-2xl bg-white shadow-lg border border-brand-sage p-6 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Essential</h3>
              <p className="text-sm text-gray-600 mb-4">Small room • 8–12 seats</p>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">$2,500</div>
              <p className="text-sm text-gray-600 mb-4">Delivered in ~3 days</p>

              <ul className="text-gray-700 text-sm space-y-2 mb-4">
                <li>• D-Tools project file</li>
                <li>• Signal flow diagram</li>
                <li>• Basic rack elevation</li>
                <li>• Cable schedule</li>
              </ul>

              {/* Risk reversal badge */}
              <div className="bg-green-50 border border-green-200 rounded p-3 mb-6 text-center">
                <p className="text-xs text-green-800">
                  ✓ 14-day free revisions<br />✓ 100% deposit refund if not satisfied
                </p>
              </div>

              <a
                href="#lead"
                className="mt-auto inline-flex justify-center items-center rounded-xl bg-brand-teal px-5 py-3 font-semibold text-white shadow hover:opacity-90 transition"
              >
                Get Fixed-Price Quote
              </a>
            </div>

            {/* Professional */}
            <div className="rounded-2xl bg-white shadow-lg border-2 border-brand-teal p-6 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Professional</h3>
              <p className="text-sm text-gray-600 mb-4">Medium room • 12–20 seats</p>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">$4,500</div>
              <p className="text-sm text-gray-600 mb-4">Delivered in ~5 days</p>

              <ul className="text-gray-700 text-sm space-y-2 mb-4">
                <li>• Everything in Essential</li>
                <li>• Detailed rack elevations</li>
                <li>• Equipment schedules (SKU, qty)</li>
                <li>• Installer notes</li>
              </ul>

              {/* Risk reversal badge */}
              <div className="bg-green-50 border border-green-200 rounded p-3 mb-6 text-center">
                <p className="text-xs text-green-800">
                  ✓ 14-day free revisions<br />✓ 100% deposit refund if not satisfied
                </p>
              </div>

              <a
                href="#lead"
                className="mt-auto inline-flex justify-center items-center rounded-xl bg-brand-teal px-5 py-3 font-semibold text-white shadow hover:opacity-90 transition"
              >
                Get Fixed-Price Quote
              </a>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl bg-white shadow-lg border border-brand-sage p-6 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
              <p className="text-sm text-gray-600 mb-4">Large room • 20+ seats</p>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">$8,000</div>
              <p className="text-sm text-gray-600 mb-4">Delivered in ~7 days</p>

              <ul className="text-gray-700 text-sm space-y-2 mb-4">
                <li>• Everything in Professional</li>
                <li>• Advanced network considerations</li>
                <li>• Multi-display/mic arrays</li>
                <li>• Multi-room option available</li>
              </ul>

              {/* Risk reversal badge */}
              <div className="bg-green-50 border border-green-200 rounded p-3 mb-6 text-center">
                <p className="text-xs text-green-800">
                  ✓ 14-day free revisions<br />✓ 100% deposit refund if not satisfied
                </p>
              </div>

              <a
                href="#lead"
                className="mt-auto inline-flex justify-center items-center rounded-xl bg-brand-teal px-5 py-3 font-semibold text-white shadow hover:opacity-90 transition"
              >
                Get Fixed-Price Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OBJECTIONS (embedded QA) ===================== */}
      <section className="section-padding bg-white border-y border-brand-sage/60">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Common Questions, Answered
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold">?</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What if my installer can’t read D-Tools?
                </h3>
                <p className="text-gray-600">
                  D-Tools is the industry standard—any professional installer knows it.
                  We also include plain-English cable schedules and signal flow diagrams.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold">?</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Can this be done 100% remotely?
                </h3>
                <p className="text-gray-600">
                  Yes—87 rooms designed without a single site visit. We use video calls,
                  floor plans, and photos. You avoid $2k–$5k in travel fees.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold">?</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What if I need changes after delivery?
                </h3>
                <p className="text-gray-600">
                  Minor revisions (equipment swaps, cable tweaks) are free for 14 days.
                  Major scope changes are quoted separately.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold">?</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How do I know this will work?
                </h3>
                <p className="text-gray-600">
                  100% on-time delivery record. If your installer flags a design issue,
                  we revise it free or refund your deposit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PORTFOLIO / SAMPLE WORK ===================== */}
      <section className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              See What You Get
            </h2>
            <p className="text-xl text-gray-600">Sample deliverables from real projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                D-Tools – Signal Flow (placeholder)
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Signal Flow Diagram</h3>
                <p className="text-sm text-gray-600">
                  Every connection documented—no guesswork for your installer.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                Rack Elevation (placeholder)
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Rack Elevation</h3>
                <p className="text-sm text-gray-600">
                  Exact equipment mounting and spacing—builds right the first time.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                Cable Schedule (placeholder)
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Cable Schedule</h3>
                <p className="text-sm text-gray-600">
                  Every cable listed with source, destination, and length.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/sample-design-package.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3 font-semibold text-white shadow hover:opacity-90 transition"
              target="_blank"
            >
              📄 Download Sample Design Package
            </a>
            <p className="text-xs text-gray-600 mt-2">
              (You can replace this with an anonymized PDF when ready.)
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA / ANCHOR FOR FORM BUTTONS ===================== */}
      <section id="lead" className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Get Your Fixed-Price Quote</h2>
            <p className="text-gray-700 mt-2">
              Tell us about your room and timeline. We’ll reply within 4 business hours.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
