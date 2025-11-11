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
      {/* Hero */}
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
            {/* Left: headline & proof */}
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
                Vendor-neutral, fixed-price design packages with D-Tools
                documentation. Start procurement quickly and install with
                confidence.
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

            {/* Right: Lead Form */}
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                “Got our design in four days. No more HDMI treasure
                hunts—everything just works.”
              </p>
              <div className="border-t border-brand-sage pt-4">
                <p className="font-semibold text-gray-900">Sarah C.</p>
                <p className="text-sm text-gray-600">IT Manager</p>
              </div>
            </div>

            <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
              <div className="text-brand-teal mb-3 text-2xl">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                “Documentation was flawless—our installer said it was the best
                package he’s seen.”
              </p>
              <div className="border-t border-brand-sage pt-4">
                <p className="font-semibold text-gray-900">David M.</p>
                <p className="text-sm text-gray-600">Operations VP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
