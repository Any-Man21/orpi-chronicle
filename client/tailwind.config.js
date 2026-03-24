/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f5ecd7',
        ink: '#2d2a26',
        gold: '#c6a15b',
        dusk: '#3a352d',
      },
      fontFamily: {
        chronicle: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}