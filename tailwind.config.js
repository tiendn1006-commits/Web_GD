/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': {
          50: '#FFF5F7',
          100: '#FFE4E9',
          200: '#FFC9D4',
          300: '#FFADBF',
          400: '#FF91AA',
          500: '#F472B6',
          600: '#EC4899',
          700: '#DB2777',
          800: '#BE185D',
          900: '#9F1239',
        }
      }
    },
  },
  plugins: [],
}
