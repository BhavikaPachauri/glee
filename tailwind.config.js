/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        herobanner:
          "url('https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/1zgLbTjhS9.webp')",
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
