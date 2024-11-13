/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aboutbanner': "url('assets/images/png/AboutBanner.png')",
        'history': "url('assets/images/png/HistoryBackground.png')",

      },
      backgroundSize: {
        'bgfull': '100% 100%'

      },

    },
  },
  plugins: [],
}