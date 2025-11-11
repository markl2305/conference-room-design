import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Professional Conference Room Design | CalLord Unified Technologies",
  description:
    "Complete conference room design with D-Tools docs, signal flow, equipment specs, and installation guidance. Delivered in 3–7 days. Nationwide remote service."
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {!!GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
