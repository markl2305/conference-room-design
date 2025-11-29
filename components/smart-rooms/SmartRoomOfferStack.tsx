import CTAButton from "../ui/CTAButton";

export default function SmartRoomOfferStack() {
  return (
    <section className="bg-[#0B1720] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Two Ways to Get to a Conference Room That Just Works
          </h2>
          <p className="text-lg text-gray-200">
            Pick the path that matches your urgency and internal capacity. Both start with clarity, end with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6 md:p-7 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Smart Room Blueprint</h3>
              <span className="text-sm font-semibold text-[#F1E7D8]">$750</span>
            </div>
            <p className="mt-2 text-gray-200">
              Know exactly what to build before you spend on hardware.
            </p>
            <ul className="mt-4 space-y-2 text-gray-200">
              {[
                "Room assessment from photos, dimensions, and current gear",
                "Recommended layout and camera positions",
                "Gear list with 1–2 options per component (good / best)",
                "Wiring and connection diagram your installer can follow",
                "Integration notes for Zoom / Microsoft Teams in mixed environments",
                "Budget ranges and phased upgrade options",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#279A92]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-300">
              Best for firms who want a clear plan and bill of materials before engaging vendors.
            </p>
            <div className="mt-6">
              <CTAButton
                href="?interest=Blueprint#smart-room-consult"
                variant="secondary"
                className="w-full justify-center px-4 py-3"
                data-event="smart_room_blueprint_cta"
              >
                Get My Smart Room Blueprint
              </CTAButton>
            </div>
          </div>

          <div className="rounded-2xl border border-teal-500/40 bg-gradient-to-br from-[#0F2530] to-[#0B1720] p-6 md:p-7 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Smart Room Design + Remote PM</h3>
              <span className="text-sm font-semibold text-[#F1E7D8]">$3,500–$6,500</span>
            </div>
            <p className="mt-2 text-gray-200">
              We handle design, coordination, and testing. Your team just walks into a working room.
            </p>
            <ul className="mt-4 space-y-2 text-gray-200">
              {[
                "Everything in the Blueprint",
                "Detailed install-ready docs for your chosen local installer",
                "Coordination with local subcontractors (yours or ours)",
                "Vendor quote review and sanity checks",
                "Remote project management from kickoff to final testing",
                "Final calibration and a training session with your team",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#279A92]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-300">
              Best for firms that want the room done right without partners becoming AV project managers.
            </p>
            <div className="mt-6">
              <CTAButton
                href="?interest=DesignPM#smart-room-consult"
                className="w-full justify-center px-4 py-3"
                data-event="smart_room_design_pm_cta"
              >
                Talk About Design + Remote PM
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
