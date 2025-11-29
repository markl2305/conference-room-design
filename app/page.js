// app/page.js
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Professional Conference Room Design | CalLord Unified Technologies",
  description:
    "Fixed-price, vendor-neutral conference room design delivered in 3–7 days. D-Tools documentation, signal flow, rack elevations, and installation guidance. 100% remote.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header (logo doubled, CTA and Call pulled in with extra side padding) */}
      <header className="w-full bg-brand-beige border-b border-brand-sage/40">
        <div className="container-custom px-6 md:px-8 flex items-center justify-between py-3">
          {/* Left: Logo (doubled) */}
          <Link href="https://callordut.com" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CalLord Unified Technologies"
              width={720}
              height={400}
              priority
              className="h-[160px] md:h-[176px] w-auto"
            />
          </Link>

          {/* Right: Call + CTA (not flush to the right) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+15052261457"
              className="rounded-xl border border-brand-teal/30 px-3 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-teal/10"
            >
              Call (505) 226-1457
            </a>
            <Link
              href="#lead"
              className="rounded-xl bg-brand-teal px-4 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal/40"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Hero (added side padding, improved bullets, photo under bullets, phone removed here) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-teal to-brand-teal/85 text-white">
        <div className="container-custom px-4 md:px-6 py-12 md:py-16">
          {/* Trust bar ABOVE headline */}
          <div className="text-center mb-6">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>
                  <strong>87</strong> rooms designed
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>
                  <strong>4.9/5</strong> average rating
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Trusted by Fortune-500 teams</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-4">
              Professional Conference Room Design — Delivered in 3–7 Days
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Complete D-Tools documentation, equipment specifications, signal flow diagrams, and
              installation guidance. 100% remote delivery. Nationwide.
            </p>
          </div>

          {/* Urgency banner */}
          <div className="mt-6 flex justify-center">
            <div className="rounded-full bg-red-600/95 px-4 py-2 text-sm font-semibold">
              ⏰ November slots filling fast — only 3 projects left
            </div>
          </div>

          {/* Form row */}
          <div id="lead" className="mt-10 grid md:grid-cols-2 gap-10 items-start">
            {/* Left column: bullets + photo */}
            <div className="order-2 md:order-1 text-white/90">
              <ul className="space-y-3 text-base md:text-lg leading-7 text-white/95">
                {[
                  "Fixed pricing. No surprises. No equipment sales conflict.",
                  "D-Tools Pro package: rack elevations, cable schedules, and as-built docs.",
                  "Vendor-neutral specs so you can bid competitively or DIY.",
                  "14-day revision guarantee. Response within 4 business hours.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 pl-1">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-300 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              {/* Photo under bullets to fill space (figcaption removed) */}
              <div className="mt-8">
                <figure className="rounded-xl overflow-hidden shadow-lg shadow-black/20 ring-1 ring-white/10">
                  <img
                    src="/images/hero-room.png"
                    alt="Recent conference room design delivered in 5 days"
                    className="w-full h-56 md:h-72 object-cover"
                    loading="eager"
                  />
                </figure>
              </div>
            </div>

            {/* Right column: form */}
            <div className="order-1 md:order-2">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, fixed pricing</h2>
            <p className="text-gray-600 mt-2">
              Choose the package that fits your room. Delivery windows are guaranteed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Essential",
                price: "$2,500",
                room: "8–12 people",
                days: "3-day delivery",
                items: [
                  "D-Tools project + PDF set",
                  "Signal flow diagram",
                  "Equipment specifications",
                  "Cable schedule",
                ],
              },
              {
                name: "Professional",
                price: "$4,500",
                room: "12–20 people",
                days: "5-day delivery",
                items: [
                  "Everything in Essential",
                  "Rack elevation drawings",
                  "Network / AV patching plan",
                  "Installer handoff call",
                ],
              },
              {
                name: "Enterprise",
                price: "$8,000",
                room: "20+ people",
                days: "7-day delivery",
                items: [
                  "Everything in Professional",
                  "Multiple display layouts",
                  "Redundancy & failover plan",
                  "Procurement assistance",
                ],
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-brand-sage/50 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                <p className="mt-1 text-gray-600">{t.room}</p>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">{t.price}</p>
                <p className="text-sm text-gray-600">{t.days}</p>

                <div className="mt-4 rounded border border-green-200 bg-green-50 p-3 text-center text-xs text-green-800">
                  ✓ 14-day free revisions
                  <br />✓ 100% deposit refund if not satisfied
                </div>

                <ul className="mt-4 space-y-2 text-gray-700">
                  {t.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="#lead"
                    className="btn-primary inline-flex items-center justify-center rounded-xl bg-brand-teal px-4 py-2 font-semibold text-white hover:opacity-90"
                  >
                    Get This Package
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 mx-auto max-w-2xl bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-gray-700">
            <strong>⚡ Year-end rush:</strong> Book by Nov 20 to guarantee pre-holiday delivery.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Facility Managers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "We received a complete D-Tools package in 4 days and saved $11,000 by competitive bidding.",
                name: "Tom Richardson",
                title: "Facilities Director",
                org: "Consulting firm, Denver",
              },
              {
                quote:
                  "Everything just worked. No more HDMI treasure hunts—best $4,500 we’ve spent on AV.",
                name: "Sarah Chen",
                title: "IT Manager",
                org: "Tech company, Austin",
              },
              {
                quote:
                  "Documentation was flawless—our installer said it was the best he’s seen. On time and on budget.",
                name: "David Martinez",
                title: "Operations VP",
                org: "Manufacturing, Phoenix",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white p-6 rounded-lg border-l-4 border-brand-teal shadow-sm">
                <div className="text-brand-teal mb-3 text-2xl">★★★★★</div>
                <p className="text-gray-700 mb-4 italic">“{t.quote}”</p>
                <div className="border-t border-brand-sage pt-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.title}</p>
                  <p className="text-sm text-gray-600">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objections / common questions */}
      <section className="section-padding bg-white border-y border-brand-sage/40">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Common Questions, Answered
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Objection
              q='“Can this really be done remotely?”'
              a="Yes—87 rooms designed without a single site visit. We use video calls, floor plans, and photos. Saves $2,000–$5,000 in travel vs. on-site consultants."
            />
            <Objection
              q='“What if my installer can’t read D-Tools?”'
              a="D-Tools is industry standard. We also include plain-English cable schedules and signal flow diagrams that any professional can follow."
            />
            <Objection
              q='“What if I need changes?”'
              a="Minor revisions are free for 14 days. Major scope changes are quoted separately. Our goal: you’re 100% satisfied before you buy equipment."
            />
            <Objection
              q='“How do I know this will work?”'
              a="100% on-time delivery record. If your installer raises a valid design concern, we revise free or refund your deposit."
            />
          </div>

          <div className="text-center mt-10">
            <a
              href="#lead"
              className="rounded-xl bg-brand-teal px-5 py-3 font-semibold text-white hover:opacity-90"
            >
              Get Your Fixed-Price Quote
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="container-custom py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} CalLord Unified Technologies • Albuquerque, NM •{" "}
          <a href="tel:+15052261457" className="text-brand-teal font-semibold">
            (505) 226-1457
          </a>
        </div>
      </footer>
    </main>
  );
}

function Objection({ q, a }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl">
          ?
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{q}</h3>
        <p className="text-gray-600">{a}</p>
      </div>
    </div>
  );
}
