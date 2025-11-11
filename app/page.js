import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-brand-beige border-b border-brand-sage sticky top-0 z-50 shadow-sm">
        <div className="container-custom py-3">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-3">
              {/* Drop your file at /public/logo.svg (or change src) */}
              <Image
                src="/logo.svg"
                alt="CalLord Unified Technologies"
                width={36}
                height={36}
                priority
              />
              <span className="text-xl md:text-2xl font-bold">
                <span className="text-brand-teal">CalLord</span>{" "}
                <span className="text-gray-700">Unified Technologies</span>
              </span>
            </a>

            <a
              href="https://calendly.com/mark-callordut/30min"
              className="btn-primary text-sm md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Conference Room Design—Delivered in 3–7 Days
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Complete D-Tools documentation, equipment specifications, signal flow diagrams,
              and installation guidance. 100% remote delivery. Nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/mark-callordut/30min"
                className="btn-primary bg-white text-brand-teal hover:bg-brand-beige text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Consultation
              </a>
              {/* Readable by default on teal background */}
              <a href="#pricing" className="btn-ghost-white text-lg">
                View Pricing
              </a>
            </div>
            <p className="mt-6 text-white/80 text-sm">Fixed pricing. No surprises. No hidden fees.</p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 bg-brand-beige border-b border-brand-sage">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center text-gray-700">
            <div>
              <div className="text-2xl font-bold text-brand-teal">100%</div>
              <div className="text-sm">Remote Delivery</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-sage"></div>
            <div>
              <div className="text-2xl font-bold text-brand-teal">3–7 Days</div>
              <div className="text-sm">Rapid Turnaround</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-sage"></div>
            <div>
              <div className="text-2xl font-bold text-brand-teal">Nationwide</div>
              <div className="text-sm">Service Available</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-sage"></div>
            <div>
              <div className="text-2xl font-bold text-brand-teal">D-Tools</div>
              <div className="text-sm">Pro Documentation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Why Most Conference Rooms Fail
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              You’ve seen it before. Meetings delayed. Technology that doesn’t work. Frustrated teams.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔇",
                  title: "Poor Audio Quality",
                  text:
                    "Remote participants can’t hear. Echoes and feedback ruin the meeting. Professional audio design eliminates these problems."
                },
                {
                  icon: "🔌",
                  title: "Cable Chaos",
                  text:
                    "HDMI hunting wastes 10 minutes every meeting. Proper signal routing and connectivity design makes sharing seamless."
                },
                {
                  icon: "❓",
                  title: "Unusable Systems",
                  text:
                    "Complex controls nobody understands. Our designs prioritize simplicity and include user operation guides."
                }
              ].map((item, i) => (
                <div key={i} className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-brand-beige p-8 rounded-lg border border-brand-sage">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-brand-teal">The truth:</span> Most conference room failures
                happen at the design stage—before any equipment is purchased. Professional system design prevents
                these problems before they start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Three Service Tiers. Fixed Pricing.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your room size and complexity. All include complete D-Tools documentation
              and installation guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200 hover:border-brand-teal transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential Small Room</h3>
                <div className="text-4xl font-bold text-brand-teal mb-2">$2,500</div>
                <div className="text-gray-600">8–12 person rooms</div>
                <div className="text-sm text-gray-500 mt-2">3-day delivery</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Schematic diagrams & signal flow",
                  "Equipment specifications & sourcing",
                  "Cable schedule & routing plan",
                  "Network architecture",
                  "Installation guidance",
                  "D-Tools professional documentation"
                ].map((t, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/mark-callordut/30min"
                className="btn-primary w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-lg shadow-2xl p-8 border-4 border-brand-teal relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Medium Room</h3>
                <div className="text-4xl font-bold text-brand-teal mb-2">$4,500</div>
                <div className="text-gray-600">12–20 person boardrooms</div>
                <div className="text-sm text-gray-500 mt-2">5-day delivery</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Essential, plus:",
                  "Rack elevation drawings",
                  "Control system design (Crestron/Extron)",
                  "Advanced audio (mic array, DSP)",
                  "Video distribution & display design",
                  "User operation manual",
                  "Priority email support"
                ].map((t, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-gray-700 ${i === 0 ? "font-semibold" : ""}`}>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/mark-callordut/30min"
                className="btn-primary w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200 hover:border-brand-teal transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Complex Room</h3>
                <div className="text-4xl font-bold text-brand-teal mb-2">$8,000</div>
                <div className="text-gray-600">20+ person rooms</div>
                <div className="text-sm text-gray-500 mt-2">7-day delivery</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Professional, plus:",
                  "Complex integration (multi-codec, recording)",
                  "Scalable system architecture",
                  "Advanced control programming documentation",
                  "Redundancy & failover design",
                  "Dedicated project consultation calls"
                ].map((t, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-gray-700 ${i === 0 ? "font-semibold" : ""}`}>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/mark-callordut/30min"
                className="btn-primary w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Not sure which tier fits your needs?</p>
            <a
              href="https://calendly.com/mark-callordut/30min"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Simple Process. Professional Results.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From consultation to installation-ready documentation in 3–7 days.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-sage -translate-x-1/2"></div>

              {[
                {
                  n: 1,
                  title: "Book Consultation",
                  text:
                    "15-minute call to discuss room size, budget, and requirements. We recommend the right tier and answer your questions.",
                  left: true
                },
                {
                  n: 2,
                  title: "Choose Your Tier",
                  text:
                    "Select Essential ($2,500), Professional ($4,500), or Enterprise ($8,000) based on complexity. Fixed pricing—no surprises.",
                  left: false
                },
                {
                  n: 3,
                  title: "Receive Design Package",
                  text:
                    "Delivery in 3–7 days: D-Tools files, signal flow, equipment specs, cable schedules, and installation guidance.",
                  left: true
                },
                {
                  n: 4,
                  title: "Build or Install",
                  text:
                    "Hand off to your installer, use our docs for competitive bids, or DIY with our guidance. You’re in control.",
                  left: false
                }
              ].map((s, i) => (
                <div key={i} className="relative mb-12 md:mb-16">
                  <div className="flex items-center">
                    {s.left ? (
                      <>
                        <div className="md:w-1/2 md:pr-12 text-right">
                          <h3 className="text-2xl font-bold mb-3 text-gray-900">{`${s.n}. ${s.title}`}</h3>
                          <p className="text-gray-600">{s.text}</p>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 -translate-x-1/2 z-10">
                          {s.n}
                        </div>
                        <div className="md:w-1/2" />
                      </>
                    ) : (
                      <>
                        <div className="md:w-1/2" />
                        <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 -translate-x-1/2 z-10">
                          {s.n}
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                          <h3 className="text-2xl font-bold mb-3 text-gray-900">{`${s.n}. ${s.title}`}</h3>
                          <p className="text-gray-600">{s.text}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://calendly.com/mark-callordut/30min"
              className="btn-primary text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Facility Managers Choose CalLord</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional expertise without the enterprise price tag.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              ["⚡", "Fast Turnaround", "3–7 day delivery so you can start procurement and installation quickly."],
              ["💰", "Fixed Pricing", "Know your design costs upfront. No hourly surprises. Budget with confidence."],
              ["📐", "D-Tools Documentation", "Industry-standard documentation that installers recognize immediately."],
              ["🎯", "Vendor-Neutral", "Specs based solely on your needs. Get competitive bids from any installer."],
              ["🌎", "100% Remote", "Nationwide service without travel fees. Great for multi-location rollouts."],
              ["🛠️", "Install Guidance Included", "Cable schedules, routing plans, setup instructions—clear and actionable."]
            ].map(([icon, title, text], i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-teal">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA & Footer remain unchanged from your last deploy */}
      {/* ... keep the rest of your page as-is ... */}
    </>
  );
}
