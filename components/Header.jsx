// components/Header.jsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-teal-700/90 text-white backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center" aria-label="CalLord Unified Technologies">
            {/* Put your real file in /public/logo-cLordut.svg (no spaces in filename) */}
            <img
              src="/logo-cLordut.svg"
              alt="CalLord Unified Technologies"
              className="h-9 w-auto md:h-10"
            />
          </Link>

          {/* CTA (kept off the right edge by the container) */}
          <div className="flex items-center gap-3">
            <Link
              href="#quote"
              className="shrink-0 rounded-lg px-4 py-2 text-sm font-semibold bg-amber-300 text-teal-900 hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
