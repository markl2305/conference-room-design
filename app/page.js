import './globals.css'

export default function Home() {
  return (
    <>
      {/* Header/Navigation */}
      <header className="bg-white border-b border-brand-sage sticky top-0 z-50 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-brand-teal">
              CalLord <span className="text-gray-600">Unified Technologies</span>
            </div>
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

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Conference Room Design—Delivered in 3-7 Days
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
              <a 
                href="#pricing"
                className="btn-secondary text-lg border-white text-white hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-6 text-white/80 text-sm">
              Fixed pricing. No surprises. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Bar */}
      <section className="py-8 bg-brand-beige border-b border-brand-sage">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center text-gray-700">
            <div>
              <div className="text-2xl font-bold text-brand-teal">100%</div>
              <div className="text-sm">Remote Delivery</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-sage"></div>
            <div>
              <div className="text-2xl font-bold text-brand-teal">3-7 Days</div>
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
              <div className="text-sm">Professional Documentation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Why Most Conference Rooms Fail
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              You've seen it before. Meetings delayed. Technology that doesn't work. Frustrated teams.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
                <div className="text-4xl mb-4">🔇</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Poor Audio Quality</h3>
                <p className="text-gray-600">
                  Remote participants can't hear. Echoes and feedback ruin the meeting. 
                  Professional audio design eliminates these problems.
                </p>
              </div>
              
              <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
                <div className="text-4xl mb-4">🔌</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Cable Chaos</h3>
                <p className="text-gray-600">
                  HDMI hunting wastes 10 minutes every meeting. Proper signal routing and 
                  connectivity design makes sharing seamless.
                </p>
              </div>
              
              <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Unusable Systems</h3>
                <p className="text-gray-600">
                  Complex controls nobody understands. Our designs prioritize simplicity 
                  and include user operation guides.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-brand-beige p-8 rounded-lg border border-brand-sage">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-brand-teal">The truth:</span> Most conference room 
                failures happen at the design stage—before any equipment is purchased. Professional 
                system design prevents these problems before they start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers / Pricing */}
      <section id="pricing" className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Three Service Tiers. Fixed Pricing.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your room size and complexity. 
              All include complete D-Tools documentation and installation guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tier 1: Essential */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200 hover:border-brand-teal transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential Small Room</h3>
                <div className="text-4xl font-bold text-brand-teal mb-2">$2,500</div>
                <div className="text-gray-600">8-12 person rooms</div>
                <div className="text-sm text-gray-500 mt-2">3-day delivery</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Schematic diagrams & signal flow</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Equipment specifications & sourcing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Cable schedule & routing plan</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Network architecture</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Installation guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">D-Tools professional documentation</span>
                </li>
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

            {/* Tier 2: Professional (Featured) */}
            <div className="bg-white rounded-lg shadow-2xl p-8 border-4 border-brand-teal relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Medium Room</h3>
                <div className="text-4xl font-bold text-brand-teal mb-2">$4,500</div>
                <div className="text-gray-600">12-20 person boardrooms</div>
                <div className="text-sm text-gray-500 mt-2">5-day delivery</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-semibold">Everything in Essential, plus:</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Rack elevation drawings</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Control system design (Crestron/Extron)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Advanced audio design (mic array, DSP)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Video distribution & display design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">User operation manual</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Priority email support</span>
                </li>
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

            {/* Tier 3: Enterprise */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200 hover:border-brand-teal transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Complex Room</h3>
                <div className="text-4xl font-bold text-brand-teal mb-2">$8,000</div>
                <div className="text-gray-600">20+ person rooms</div>
                <div className="text-sm text-gray-500 mt-2">7-day delivery</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-semibold">Everything in Professional, plus:</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Complex integration (multi-codec, recording)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Scalable system architecture</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Advanced control programming documentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Redundancy & failover design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Acoustical treatment recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Dedicated project consultation calls</span>
                </li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Simple Process. Professional Results.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to installation-ready documentation in 3-7 days.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-sage transform -translate-x-1/2"></div>

              {/* Step 1 */}
              <div className="relative mb-12 md:mb-16">
                <div className="flex items-center">
                  <div className="md:w-1/2 md:pr-12 text-right">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">1. Book Consultation</h3>
                    <p className="text-gray-600">
                      15-minute call to discuss your room size, budget, and requirements. 
                      We'll recommend the right service tier and answer all your questions.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 z-10">
                    1
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12 md:mb-16">
                <div className="flex items-center">
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 z-10">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">2. Choose Your Tier</h3>
                    <p className="text-gray-600">
                      Select Essential ($2,500), Professional ($4,500), or Enterprise ($8,000) 
                      based on your room complexity. Fixed pricing, no surprises.
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
                      We deliver your complete design documentation in 3-7 days: D-Tools files, 
                      signal flow diagrams, equipment specs, cable schedules, and installation guidance.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 z-10">
                    3
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex items-center">
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-teal rounded-full text-white text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 z-10">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">4. Build or Install</h3>
                    <p className="text-gray-600">
                      Hand off to your preferred installer, use our documentation for competitive 
                      bidding, or DIY with our detailed guidance. You're in control.
                    </p>
                  </div>
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
      </section>

      {/* Why Choose CalLord */}
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
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-teal">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fast Turnaround</h3>
              <p className="text-gray-600">
                3-7 day delivery means you can start procurement and installation quickly. 
                No more waiting weeks for custom quotes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-teal">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fixed Pricing</h3>
              <p className="text-gray-600">
                Know your design costs upfront. No hourly billing surprises. Budget with confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-teal">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">D-Tools Professional Documentation</h3>
              <p className="text-gray-600">
                Industry-standard documentation that installers and vendors recognize immediately. 
                Professional quality, every time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-teal">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Vendor-Neutral Design</h3>
              <p className="text-gray-600">
                We design optimal solutions without product sales conflicts. Use our specs to 
                get competitive bids from any installer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-teal">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">100% Remote</h3>
              <p className="text-gray-600">
                Nationwide service without travel fees. Perfect for multi-location rollouts 
                or standardized room designs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-teal">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Installation Guidance Included</h3>
              <p className="text-gray-600">
                Detailed cable schedules, routing plans, and setup instructions. Your installer 
                will know exactly what to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                  You receive complete D-Tools documentation including schematic diagrams, signal flow 
                  documentation, equipment specifications with part numbers and sourcing recommendations, 
                  network architecture diagrams, cable schedules showing every connection, rack elevation 
                  drawings (Professional and Enterprise tiers), and installation guidance. Everything your 
                  installer needs to quote and build accurately.
                </p>
              </div>

              <div className="border-b border-brand-sage pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Can I install this myself or do I need a professional?
                </h3>
                <p className="text-gray-600">
                  Our Essential tier is suitable for experienced facilities teams with basic AV knowledge. 
                  Professional and Enterprise tiers typically require professional installation due to control 
                  system programming and complex integration. However, our documentation makes it easy to get 
                  competitive bids from local installers—you're not locked into any single vendor.
                </p>
              </div>

              <div className="border-b border-brand-sage pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  What if I need changes after you deliver the design?
                </h3>
                <p className="text-gray-600">
                  Minor revisions (equipment substitutions, cable routing adjustments) are included within 
                  14 days of delivery. Significant scope changes (different room layout, adding displays, 
                  upgrading control systems) are quoted separately. We want you completely satisfied with 
                  your design before you purchase equipment.
                </p>
              </div>

              <div className="border-b border-brand-sage pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Do you sell or install equipment?
                </h3>
                <p className="text-gray-600">
                  No. We're a pure design consultancy with no equipment sales conflicts. This ensures our 
                  recommendations are based solely on your needs, not sales commissions. Use our specifications 
                  to purchase from your preferred vendor, get competitive bids, or leverage existing supplier 
                  relationships.
                </p>
              </div>

              <div className="border-b border-brand-sage pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Which tier do I need?
                </h3>
                <p className="text-gray-600">
                  Essential works for small rooms (8-12 people) with straightforward needs—display, audio, 
                  basic video conferencing. Professional fits medium boardrooms (12-20 people) needing control 
                  systems, microphone arrays, and polished operation. Enterprise handles large spaces (20+ people) 
                  with complex integration, recording, or multi-codec requirements. Schedule a consultation and 
                  we'll recommend the right fit.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  How soon can you start my project?
                </h3>
                <p className="text-gray-600">
                  Most projects start within 3-5 business days of contract signing. Rush projects 
                  (need design in 48-72 hours) may be available for a 50% expedite fee—contact us to check 
                  availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-brand-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Design Your Conference Room?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule your free 15-minute consultation. We'll discuss your needs, recommend the 
            right service tier, and answer all your questions.
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
            <p>&copy; 2025 CalLord Unified Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
