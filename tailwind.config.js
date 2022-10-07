/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      colors:{
        'primary': '#001a33',
        'secondary': "#000029"
      }
    },
  },
  plugins: [],
}
