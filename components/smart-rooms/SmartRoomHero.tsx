import SmartRoomConsultForm from "./SmartRoomConsultForm";
import CTAButton from "../ui/CTAButton";

export default function SmartRoomHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-[#279A92] uppercase tracking-wide">
              Smart Rooms for Professional Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              Turn Your Conference Room Into a Client-Ready Smart Room That “Just Works”
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Walk in, tap once, and know your hybrid meetings will sound clear, look sharp, and start on time—without an in-house AV team or an enterprise integrator.
            </p>
            <ul className="space-y-3 text-base md:text-lg text-gray-700">
              {[
                "Designed for law, accounting, insurance & advisory firms",
                "Remote design + local install, typical turnaround in 3–21 days",
                "Works with Zoom and Microsoft Teams in mixed Mac/PC environments",
                "Entry point: Smart Room Blueprint from $750",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#279A92]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <CTAButton
                href="#smart-room-consult"
                className="px-5 py-3 text-base"
                data-event="smart_room_consult_cta_hero"
              >
                Book My 15-Minute Smart Room Consult
              </CTAButton>
              <div className="text-sm text-gray-700">
                Not ready yet?{" "}
                <a
                  href="#smart-room-audit"
                  className="font-semibold text-[#279A92] hover:text-[#1f7e77]"
                >
                  Get the 5-Minute Conference Room Audit
                </a>
              </div>
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="rounded-2xl shadow-lg border border-gray-100 bg-white">
              <div className="p-6 md:p-7">
                <SmartRoomConsultForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
