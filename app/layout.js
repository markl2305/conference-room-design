// app/layout.js
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Professional Conference Room Design | CalLord Unified Technologies",
  description:
    "Complete conference room design with D-Tools documentation, equipment specs, and installation guidance. Delivered in 3–7 days. Nationwide service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Optional: lock to light color scheme so Tailwind dark: styles don't invert inputs */}
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        {/* GA4 base tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=B9E1PMEW8D"
          strategy="afterInteractive"
        />
        {/* GA4 config */}
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'B9E1PMEW8D', { send_page_view: true });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
