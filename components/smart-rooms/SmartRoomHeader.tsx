import Image from "next/image";
import Link from "next/link";

export default function SmartRoomHeader() {
  return (
    <header className="w-full bg-[#F1E7D8] border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5 gap-4">
          <Link href="/" className="inline-flex items-center" aria-label="CalLord Unified Technologies">
            <Image
              src="/logo.png"
              alt="CalLord Unified Technologies"
              width={400}
              height={128}
              className="h-16 w-auto md:h-20"
            />
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold text-gray-900">
            <a href="tel:+15053157773" className="hover:text-[#279A92]"> (505) 315-7773</a>
            <span className="hidden sm:block h-5 w-px bg-gray-300" />
            <a href="mailto:sales@callordut.com" className="hover:text-[#279A92]">sales@callordut.com</a>
          </div>
        </div>
      </div>
    </header>
  );
}
