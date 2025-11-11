// app/page.js
import './globals.css';

export default function Home() {
  return (
    <>
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
              <a href="#pricing" className="btn-secondary text-lg">
                View Pricing
              </a>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              Fixed pricing. No surprises. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-brand-beige border-b border-brand-sage">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center text-gray-700">
            <div>
              <div className="text-2xl font-bold text-brand-teal">100%</div>
              <div className="text-sm">Remote Delivery</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-sage" />
            <div>
              <div className="text-2xl font-bold text-brand-teal">3–7 Days</div>
              <div className="text-sm">Rapid Turnaround</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-sage" />
            <div>
              <div className="text-2xl font-bold text-brand-teal">Nationwide</div>
              <div className="text-sm">Service Available</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-sage" />
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
              <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
                <div className="text-4xl mb-4">🔇</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Poor Audio Quality</h3>
                <p className="text-gray-600">
                  Echoes and feedback ruin meetings. Proper mic/DSP design fixes it at the source.
                </p>
              </div>

              <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
                <div className="text-4xl mb-4">🔌</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Cable Chaos</h3>
                <p className="text-gray-600">
                  HDMI hunting wastes time. Clean signal routing makes sharing instant.
                </p>
              </div>

              <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Unusable Systems</h3>
                <p className="text-gray-600">
                  Confusing controls kill adoption. We design for simplicity and provide user guides.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-brand-beige p-8 rounded-lg border border-brand-sage">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-brand-teal">Bottom line:</span> most failures
                begin at the design stage. Professional system design prevents them before they start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Three Service Tiers. Fixed Pricing.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your room size and complexity. All include complete
              D-Tools documentation and installation guidance.
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

              <ul className="space-y-3 mb-8 text-gray-700">
                <li>• Schematic diagrams & signal flow</li>
                <li>• Equipment specifications & sourcing</li>
                <li>• Cable schedule & routing plan</li>
                <li>• Network architecture</li>
                <li>• Installation guidance</li>
                <li>• D-Tools professional documentation</li>
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

            {/* Professional (featured) */}
            <div className="bg-white rounded-lg shadow-2xl p-8 border-4 border-brand-teal relative md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Medium Room</h3>
                <div className="text-4xl font-bold text-brand-teal mb-2">$4,500</div>
                <div className="text-gray-600">12–20 person boardrooms</div>
                <div className="text-sm text-gray-500 mt-2">5-day delivery</div>
              </div>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li>• Everything in Essential, plus:</li>
                <li>• Rack elevation drawings</li>
                <li>• Control system design (Crestron/Extron)</li>
                <li>• Advanced audio (mic array, DSP)</li>
                <li>• Video distribution & display design</li>
                <li>• User operation manual</li>
                <li>• Priority email support</li>
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

              <ul className="space-y-3 mb-8 text-gray-700">
                <li>• Everything in Professional, plus:</li>
                <li>• Complex integration (multi-codec, recording)</li>
                <li>• Scalable system architecture</li>
                <li>• Advanced control programming documentation</li>
                <li>• Redundancy & failover design</li>
                <li>• Acoustical treatment recommendations</li>
                <li>• Dedicated project consultation calls</li>
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
              className="btn-primary bg-transparent border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Simple Process. Professional Results.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to installation-ready documentation in 3–7 days.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-sage -translate-x-1/2" />

              {/* Step 1 */}
              <div className="relative mb-12 md:mb-16">
                <div className="flex items-center">
                  <div className="md:w-1/2 md:pr-12 text-right">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">1. Book Consultation</h3>
                    <p className="text-gray-600">
                      15-minute call to align on room size, budget, and requirements.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 -translate-x-1/2 z-10">
                    1
                  </div>
                  <div className="md:w-1/2" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12 md:mb-16">
                <div className="flex items-center">
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 -translate-x-1/2 z-10">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">2. Choose Your Tier</h3>
                    <p className="text-gray-600">
                      Essential ($2,500), Professional ($4,500), or Enterprise ($8,000).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-12 md:mb-16">
                <div className="flex items-center">
                  <div className="md:w-1/2 md:pr-12 text-right">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">3. Receive Design Package</h3>
                    <p className="text-gray-600">
                      D-Tools files, diagrams, specs, cable schedules, and install guidance.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 -translate-x-1/2 z-10">
                    3
                  </div>
                  <div className="md:w-1/2" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex items-center">
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 -translate-x-1/2 z-10">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">4. Build or Install</h3>
                    <p className="text-gray-600">
                      Hand off to your installer, get competitive bids, or DIY with our guidance.
                    </p>
                  </div>
                </div>
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
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Facility Managers Choose CalLord
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional expertise without the enterprise price tag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              ['⚡', 'Fast Turnaround', 'Start procurement quickly with 3–7 day delivery.'],
              ['💰', 'Fixed Pricing', 'Budget with confidence—no hourly surprises.'],
              ['📐', 'D-Tools Documentation', 'Installer-ready drawings and schedules.'],
              ['🎯', 'Vendor-Neutral Design', 'Specs you can bid competitively with any installer.'],
              ['🌎', '100% Remote', 'Ideal for multi-location rollouts and standards.'],
              ['🛠️', 'Installation Guidance', 'Clear cable schedules and setup steps.']
            ].map(([icon, title, body]) => (
              <div key={title} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-teal">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-b border-brand-sage pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  What exactly do I receive in the design package?
                </h3>
                <p className="text-gray-600">
                  Complete D-Tools documentation: schematics, signal flow, equipment specs, network
                  diagrams, cable schedules, rack elevations (Pro/Enterprise), and installation guidance.
                </p>
              </div>

              <div className="border-b border-brand-sage pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Can I install this myself or do I need a professional?
                </h3>
                <p className="text-gray-600">
                  Essential can work for experienced facilities teams. Pro/Enterprise typically
                  require a professional due to control and complexity.
                </p>
              </div>

              <div className="border-b border-brand-sage pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  What if I need changes after delivery?
                </h3>
                <p className="text-gray-600">
                  Minor revisions within 14 days are included. Major scope changes are quoted separately.
                </p>
              </div>

              <div className="border-b border-brand-sage pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Do you sell or install equipment?
                </h3>
                <p className="text-gray-600">
                  No—pure design consultancy. That keeps recommendations vendor-neutral.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">How soon can you start?</h3>
                <p className="text-gray-600">
                  Most projects start within 3–5 business days. Rush (48–72 hours) is sometimes available
                  for a 50% expedite fee.
                </p>
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
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule your free 15-minute consultation. We’ll recommend the right tier and answer questions.
          </p>
          <a
            href="https://calendly.com/mark-callordut/30min"
            className="btn-primary bg-white text-brand-teal hover:bg-brand-beige text-lg inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Free Consultation
          </a>
          <p className="mt-6 text-white/80">
            Or call us directly: <a href="tel:+15052261457" className="font-semibold hover:underline">(505) 226-1457</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">CalLord Unified Technologies</h3>
              <p className="text-gray-400">
                Professional conference room design services. Nationwide remote delivery.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#pricing" className="hover:text-brand-teal transition-colors">Essential Small Room ($2,500)</a></li>
                <li><a href="#pricing" className="hover:text-brand-teal transition-colors">Professional Medium Room ($4,500)</a></li>
                <li><a href="#pricing" className="hover:text-brand-teal transition-colors">Enterprise Complex Room ($8,000)</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Based in Albuquerque, NM</li>
                <li>Serving nationwide</li>
                <li><a href="tel:+15052261457" className="hover:text-brand-teal transition-colors">(505) 226-1457</a></li>
                <li><a href="https://dominusfoundry.com" className="hover:text-brand-teal transition-colors">dominusfoundry.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CalLord Unified Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
