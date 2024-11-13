/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'heropattern1': "url('assets/images/webp/lab.webp')",
      //   'heropattern2': "url('assets/images/webp/slide1.webp')",
      //   'heropattern3': "url('assets/images/webp/slide2.webp')",
      //   'contactbg': "url('assets/images/webp/banner.webp')",
      //   'grid1': "url('assets/images/webp/grid1.webp')",
      //   'grid2': "url('assets/images/webp/grid2.webp')",
      //   'grid3': "url('assets/images/webp/grid3.webp')",
      //   'custom_gradient': 'linear-gradient(to top, #002347 50%, #FFFFFF 50%)',
      // },
      // backdropBlur: {
      //   "bgblur": 'blur(-10px)'
      // },
      // backgroundSize: {
      //   'bgfull': '100% 100%',
      // },
      // screens: {
      //   '3xl': '1700px',
      //   'xs': '425px',
      // },
      // boxShadow: {
      //   "btn_shadow": '2px 5px 10px #ffffff',
      //   "card_shadow": '6px 13px 38px 0px #0000001f',
      // },
      // keyframes: {
      //   upDown: {
      //     '0%, 100%': { transform: 'translateY(0)' },
      //     '50%': { transform: 'translateY(-15px)' },
      //   },
      // },
      // animation: {
      //   'updown': 'upDown 2s ease-in-out infinite',
      // },
      // keyframes: {
      //   backtotop: {
      //     '0%, 100%': { transform: 'translateY(0)' },
      //     '50%': { transform: 'translateY(-2px)' },
      //   },
      // },
      // animation: {
      //   'backtotop': 'backtotop 1s linear infinite',
      // },
    },
  },
  plugins: [],
}