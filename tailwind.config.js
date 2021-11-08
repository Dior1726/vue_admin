const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '100': '30rem',
        '200': '50rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
