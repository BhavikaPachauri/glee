/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        aboutbanner: "url('assets/images/webp/AboutBanner.webp')",
        history: "url('assets/images/webp/HistoryBackground.webp')",
        getintouch: "url('assets/images/webp/ContactBanner.webp')",
      },
      backgroundSize: {
        bgfull: "100% 100%",
      },
      boxShadow: {
        cardshadow: "0px_4px_19.5px_0px_#00000040",
      },
      keyframes: {
        backtotop: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
      },
      animation: {
        backtotop: "backtotop 1s linear infinite",
      },
    },
  },
  plugins: [],
};
