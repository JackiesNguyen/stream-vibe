/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          10: 'var(--black-10)',
          15: 'var(--black-15)',
          '06': 'var(--black-06)',
        },
        grey: {
          60: 'var(--grey-60)',
        },
        primary: 'var(--primary)',
      },
      boxShadow: {
        primary: 'var(--boxShadow-primary)',
      },
    },
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography'), require('tailwindcss-rfs')],
}
