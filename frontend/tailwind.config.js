/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          '06': 'var(--black-06)',
          '08': 'var(--black-08)',
          10: 'var(--black-10)',
          12: 'var(--black-12)',
          15: 'var(--black-15)',
          20: 'var(--black-20)',
        },
        grey: {
          60: 'var(--grey-60)',
        },
        red: {
          45: 'var(--red-45)',
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
