import CTAButton from "../ui/CTAButton";

export default function SmartRoomProcess() {
  const steps = [
    {
      title: "1) Discovery Call",
      desc: "Map your rooms, meeting patterns, and platforms. Confirm goals and constraints in 15 minutes.",
    },
    {
      title: "2) Blueprint or Design",
      desc: "We deliver a Smart Room Blueprint in days, or expand to full Design + Remote PM if you’re ready.",
    },
    {
      title: "3) Coordinate & Build",
      desc: "We work with your installer (or ours) using clear documentation, vendor quote reviews, and remote PM.",
    },
    {
      title: "4) Test & Train",
      desc: "Final calibration, one-tap start validation, and a short training so anyone can run the room confidently.",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-8 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">How We Get You to “Tap Once and Start”</h2>
          <p className="text-gray-700 text-lg">
            A simple, senior-led process that respects your team’s time and delivers a room that signals credibility.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <CTAButton href="#smart-room-consult" className="px-5 py-3 text-base" data-event="smart_room_consult_cta_process">
            Book My 15-Minute Smart Room Consult
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
