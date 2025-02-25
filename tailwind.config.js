/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 1s infinite linear alternate-reverse',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'none' },
          '100%': { transform: 'skew(1deg)' },
        },
      },
    },
  },
  plugins: [],
};