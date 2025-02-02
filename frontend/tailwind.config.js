/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: { mainColor: '#08023A', pColor: '#8E00E2' },
      boxShadow: {
        '3xl': '15px 15px 10px 0 rgba(0, 0, 0, 0.5)',
        btn: '3px 1px 7px 3px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        offerBackgroundImg: "url('./IMG/backgroundOffer1.jpg')",
        carouselBackgroundImg: "url('./IMG/section-carousel.png')",
        gymBackgroundImg: "url('./IMG/silownia1.png')",
      },
    },
  },
  plugins: [],
};
