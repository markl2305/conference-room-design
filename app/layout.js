// app/layout.js
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Professional Conference Room Design | CalLord Unified Technologies',
  description:
    'Complete conference room design with D-Tools documentation, equipment specs, and installation guidance. Delivered in 3–7 days. Nationwide service.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 – replace with your ID if/when ready */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
            `
          }}
        />
      </head>
      <body>
        <header className="bg-brand-beige sticky top-0 z-50 shadow-sm">
          <div className="container-custom py-3 md:py-4">
            <div className="flex items-center justify-between">
              <Link href="https://callordut.com" prefetch={false} aria-label="CalLordUT home">
                <Image
                  src="/logo.png"                 // place your PNG at /public/logo.png
                  alt="CalLord Unified Technologies"
                  priority
                  width={1280}                     // intrinsic file ratio (keeps sharp)
                  height={505}
                  className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto"
                  sizes="(max-width: 640px) 64px,
                         (max-width: 768px) 80px,
                         (max-width: 1024px) 96px,
                         (max-width: 1280px) 112px,
                         128px"
                />
              </Link>

              <a
                href="https://calendly.com/mark-callordut/30min"
                className="btn-primary text-sm md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
