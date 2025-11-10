import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CalLord Conference Room Design",
  description: "Professional AV design delivered in 3–7 days"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-B9E1PMEWB0" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B9E1PMEWB0');
        `}</Script>
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
