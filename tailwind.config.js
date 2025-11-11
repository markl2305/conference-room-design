/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#279A92',
          sage: '#96B1AD',
          beige: '#F1E7D8',
          'teal-dark': '#1f7e77',
          'teal-light': '#32b5ab'
        }
      }
    }
  },
  plugins: []
};
