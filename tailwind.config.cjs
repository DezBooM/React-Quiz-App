/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "caveat": "Caveat",
        "quicksand": "Quicksand"
      },
      screens: {
        "ipad": "820px"
      }
    },
  },
  plugins: [],
}
