/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        "brand-teal": "#279A92",
        "brand-teal-dark": "#1f7e77",
        "brand-teal-light": "#32b5ab",
        "brand-sage": "#96B1AD",
        "brand-beige": "#F1E7D8",

        // UI helpers used in forms/buttons
        "navy-900": "#0B1B2B",
        "navy-600": "#2D4059",
        "bronze-300": "#D6C2A1"
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "Inter",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji"
        ]
      }
    }
  },
  plugins: []
};
