/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
      },
      boxShadow: {
        custom: 'var(--shadow-custom)',
      },
    },
  },
  plugins: [],
}
