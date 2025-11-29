import CTAButton from "../ui/CTAButton";

export default function SmartRoomFinalCTA() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to Stop Apologizing for Your Conference Room?
        </h2>
        <p className="text-lg text-gray-200">
          You’ve spent years building expertise. Your conference room should reflect that. In one short call, we’ll map your rooms, your meeting patterns, and your tech stack—and show you exactly what it takes to get to “walk in, tap once, and start.”
        </p>
        <CTAButton
          href="#smart-room-consult"
          className="px-6 py-3 text-base"
          data-event="smart_room_consult_cta_final"
        >
          Book My 15-Minute Smart Room Consult
        </CTAButton>
        <p className="text-sm text-gray-300">
          No pitch. No pressure. Just a conversation about your room and whether we can help.
        </p>
      </div>
    </section>
  );
}
