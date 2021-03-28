const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: '#edc7e0',
      first: '#fff3bd',
      second: '#f76767',
      third: '#b4303d',
      gray: colors.coolGray,
      black: colors.black
    },
    extend: { },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
