/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'header-green': '#E6E6FA',
        'light-green': '#A9E2F3',
      },
    },
  },
  plugins: [],
}
