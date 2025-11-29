export default function SmartRoomWhyUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Built for Professional Services. Not for Cannabis, Schools, or Stadiums.
          </h2>
          <p className="text-lg text-gray-700">
            You’re buying reputation insurance, not a pile of gear. We design for client-facing rooms where credibility matters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "We’re Specialists, Not Generalists.",
              body:
                "We work with law firms, accounting firms, insurance agencies, financial advisors, and boutique consultants. No cannabis, no education, no stadiums, no phone systems.",
            },
            {
              title: "Outcome-Driven, Not Hardware-Driven.",
              body:
                "You get plans and outcomes, not a warehouse of boxes. The room must signal credibility and work simply—every time.",
            },
            {
              title: "Remote Design, Local Execution.",
              body:
                "Senior-level design and PM without enterprise bureaucracy. Local subcontractors implement; our documentation keeps them aligned.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 space-y-3"
            >
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 text-sm text-gray-800">
          {[
            "Optimized for firms with 10–75 employees and 1–3 conference rooms",
            "Typical turnaround: 3–21 days",
            "Friendly to mixed Mac + PC stacks",
            "No in-house AV team required",
          ].map((point) => (
            <div key={point} className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#279A92]" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
