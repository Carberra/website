const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  important: true,
  theme: {
    screens: {
      '2xs': '400px',
      xs: '508px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['D-DIN', ...defaultTheme.fontFamily.sans],
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
      spacing: {
        md: '23.5rem',
        lg: '35.5rem',
        text: '75ch',
      },
      maxWidth: {
        text: '75ch',
      },
    },
  },
  plugins: [require('tailwind-children')],
};
