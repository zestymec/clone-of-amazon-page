/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'amazon-dark': '#131921',
        'amazon-nav': '#232f3e',
        'amazon-yellow': '#febd69',
      },
    },
  },
  plugins: [],
}
