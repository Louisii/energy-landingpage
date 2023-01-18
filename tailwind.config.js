/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top-bg': "url('./img/bg.png')"
      },
      fontFamily:{
        OpenSans: "Open Sans"
      }
    },
  },
  plugins: [],
}
