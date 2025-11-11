import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Professional Conference Room Design | CalLord Unified Technologies",
  description:
    "Complete conference room design with D-Tools documentation, equipment specs, and installation guidance. Delivered in 3-7 days. Nationwide service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-B9E1PMEWB0" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B9E1PMEWB0');
          `}
        </Script>
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
