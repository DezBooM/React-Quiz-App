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
      },
      boxShadow: {
        "custom": "0 2px 5px #616161",
        "customInner": "inset 0 0 10px 2px #616161"
      }
    },
  },
  plugins: [],
}
