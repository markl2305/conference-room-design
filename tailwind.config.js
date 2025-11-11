/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#1C8D86',
        'brand-sage': '#DEEDE8',
        'brand-beige': '#F3E9DC',
        'navy-900': '#0B1B2B',
        'navy-600': '#2D4059',
        'bronze-300': '#D6C2A1'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji']
      }
    }
  },
  plugins: []
};
