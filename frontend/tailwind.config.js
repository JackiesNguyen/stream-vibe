/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-10': 'var(--black-10)',
        'black-15': 'var(--black-15)',
        primary: 'var(--primary)',
      },
      boxShadow: {
        custom: 'var(--boxShadow-custom)',
      },
    },
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography'), require('tailwindcss-rfs')],
}
