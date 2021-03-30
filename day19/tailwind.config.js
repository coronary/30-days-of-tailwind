const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      pine: {
        light: '#F4FFCA',
        DEFAULT: '#C4CF9A',
        dark: '#BAC590'
      },
      paradiso: {
        light: '#5CB3AB',
        DEFAULT: '#388F87',
        dark: '#1A7169'
      }
    },
    extend: { },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
