export default function SmartRoomSocialProof() {
  const testimonials = [
    {
      role: "Managing Partner – Law Firm",
      quote:
        "We went from dreading video calls in our main conference room to running back-to-back hybrid meetings without a single apology for our tech.",
    },
    {
      role: "COO – Accounting Firm",
      quote:
        "The biggest win wasn’t the gear—it was the clarity. The blueprint and remote PM meant we knew exactly what would happen, when, and for how much.",
    },
    {
      role: "Senior Advisor – Financial Firm",
      quote:
        "The partners wanted one button they could trust. That’s exactly what CalLord delivered.",
    },
  ];

  return (
    <section className="bg-[#F1E7D8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Trusted by Firms That Can’t Afford to Look Amateur
          </h2>
          <p className="text-gray-700 text-lg">
            Clients’ first impression often happens on a hybrid call. These firms chose reliability and credibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.role} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-900 font-semibold mb-2">{item.role}</p>
              <p className="text-gray-700 leading-relaxed">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
