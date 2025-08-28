/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        aboutbanner:
          "url('https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/mjQk6gi0Qk.webp')",
        history:
          "url('https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/93sbLkCAiK.webp')",
        getintouch:
          "url('https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/lnwu0wWvQG.webp')",
      },
      backgroundSize: {
        bgfull: "100% 100%",
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
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
