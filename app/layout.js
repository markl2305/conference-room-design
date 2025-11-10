export const metadata = {
  title: 'Professional Conference Room Design | CalLord Unified Technologies',
  description: 'Complete conference room design with D-Tools documentation, equipment specs, and installation guidance. Delivered in 3-7 days. Nationwide service.',
  keywords: 'conference room design, AV design, video conferencing, meeting room design, D-Tools documentation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_MEASUREMENT_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
