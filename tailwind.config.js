module.exports = {
  purge: ['./src/**/*.tsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Fira Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      brand: [
        'RaveParty Wide',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        'brand-black': 'var(--color-brand-black)',
        'brand-blue': 'var(--color-brand-blue)',
        'brand-purple': 'var(--color-brand-purple)',
        'dark-accent': 'var(--color-dark-accent)',
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
