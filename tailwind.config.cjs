/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/background.jpg')",
      }
    },
    boxShadow: {
      DEFAULT: 'rgba(0, 0, 0, 0.1) 0 0 1rem ',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '1.5': '1.5 1.5 0%',
    },
    textColor: theme => ({
      ...theme('colors'),
      'theme': '#00bec9',
    }) ,
    // textColor: {
    //   'theme': '#00bec9',
    // },
    backgroundColor: theme => ({
      ...theme('colors'),
      'theme': '#00bec9',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
