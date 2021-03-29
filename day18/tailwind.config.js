const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      gin: {
        light: '#F0FFF6',
        DEFAULT: '#dbe9e1',
        dark: '#B7C3BC'
      },
      poppy: {
        light: '#942020',
        DEFAULT: '#ba2828',
        dark: '#942020'
      }
    },
    extend: { },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
