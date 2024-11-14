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
      boxShadow: {
        'cardshadow': '0px_4px_19.5px_0px_#00000040',

      }

    },
  },
  plugins: [],
}