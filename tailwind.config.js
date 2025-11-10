/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#279A92',
          sage: '#96B1AD',
          beige: '#F1E7D8',
          'teal-dark': '#1f7e77',
          'teal-light': '#32b5ab',
        },
      },
    },
  },
  plugins: [],
}
