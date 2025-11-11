export default function Page() {
  return (
    <main>
      <section className="section-padding bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Conference Room Design — Delivered in 3–7 Days
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            D-Tools documentation, equipment specs, signal flow diagrams, cable schedules, and installation guidance.
            100% remote. Nationwide.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </main>
  );
}
