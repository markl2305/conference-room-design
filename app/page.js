// app/page.js
import SmartRoomHeader from "@/components/smart-rooms/SmartRoomHeader";
import SmartRoomHero from "@/components/smart-rooms/SmartRoomHero";
import SmartRoomProblem from "@/components/smart-rooms/SmartRoomProblem";
import SmartRoomBeforeAfter from "@/components/smart-rooms/SmartRoomBeforeAfter";
import SmartRoomOfferStack from "@/components/smart-rooms/SmartRoomOfferStack";
import SmartRoomWhyUs from "@/components/smart-rooms/SmartRoomWhyUs";
import SmartRoomProcess from "@/components/smart-rooms/SmartRoomProcess";
import SmartRoomSocialProof from "@/components/smart-rooms/SmartRoomSocialProof";
import SmartRoomFAQ from "@/components/smart-rooms/SmartRoomFAQ";
import SmartRoomFinalCTA from "@/components/smart-rooms/SmartRoomFinalCTA";
import SmartRoomAuditBand from "@/components/smart-rooms/SmartRoomAuditBand";

export const metadata = {
  title: "Smart Conference Rooms for Professional Services | CalLord UT",
  description:
    "Smart Rooms that just work for client-facing hybrid meetings. Blueprint from $750, or full design + remote PM. Built for law, accounting, insurance, and advisory firms.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <SmartRoomHeader />
      <SmartRoomHero />
      <SmartRoomProblem />
      <SmartRoomBeforeAfter />
      <SmartRoomOfferStack />
      <SmartRoomWhyUs />
      <SmartRoomProcess />
      <SmartRoomSocialProof />
      <SmartRoomAuditBand />
      <SmartRoomFAQ />
      <SmartRoomFinalCTA />
      <footer className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} CalLord Unified Technologies</div>
          <div className="flex items-center gap-4">
            <a href="tel:+15053157773" className="text-[#279A92] font-semibold">
              (505) 315-7773
            </a>
            <a href="mailto:sales@callordut.com" className="text-[#279A92] font-semibold">
              sales@callordut.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
