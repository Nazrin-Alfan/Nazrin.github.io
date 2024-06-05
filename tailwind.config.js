/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
    color: {

    },
    fontFamily: {
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

