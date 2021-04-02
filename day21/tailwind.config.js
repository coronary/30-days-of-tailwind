const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      spindle: {
        light:'#e6faff',
        DEFAULT:'#b6cae8',
        dark:'#ACC0DE'
      },
      disco: {
        light:'#A93E8B',
        DEFAULT:'#851A67',
        dark:'#670049'
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
