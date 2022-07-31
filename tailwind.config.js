const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.tsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Anybody', ...defaultTheme.fontFamily.sans],
        brand: ['Zen Dots'],
      },
      colors: {
        'brand-black': 'var(--color-brand-black)',
        'brand-blue': 'var(--color-brand-blue)',
        'brand-purple': 'var(--color-brand-purple)',
      },
      inset: {
        26: '6.5rem',
        30: '7.5rem',
      },
      screens: {
        xs: '508px',
      },
    },
  },
  plugins: [],
};
