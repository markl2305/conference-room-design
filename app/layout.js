// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Professional Conference Room Design | CalLord Unified Technologies",
  description:
    "Complete conference room design with D-Tools documentation, equipment specs, and installation guidance. Delivered in 3–7 days. Nationwide service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* GA4 base tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=B9E1PMEW8D"
        />
        {/* GA4 config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'B9E1PMEW8D', { send_page_view: true });
            `,
          }}
        />
      </head>
      <body className="text-gray-800">{children}</body>
    </html>
  );
}
