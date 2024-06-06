/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkestGray: '#151515',
        slowGray : "#0D0D0D"
      },
      fontFamily: {
        iranian: ['IranianSans', 'sans-serif'],
      },
      backgroundImage: {
        'black-gradient': 'linear-gradient(to bottom, black, transparent)',
      },
    },
  },
  plugins: [],
}