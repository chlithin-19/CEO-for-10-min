/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F7F5F0',
          surface: '#FFFFFF',
          secondary: '#F1EEE7',
        },
        gold: {
          primary: '#B89555',
          dark: '#8F713D',
          subtle: 'rgba(184, 149, 85, 0.08)',
          border: 'rgba(184, 149, 85, 0.35)',
          hover: '#B89555',
        },
        luxury: {
          text: '#171717',
          secondary: '#66635D',
          muted: '#96928A',
          border: 'rgba(40, 35, 25, 0.12)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(40, 35, 25, 0.05), 0 2px 6px -1px rgba(40, 35, 25, 0.02)',
        'card-hover': '0 10px 30px -4px rgba(40, 35, 25, 0.08), 0 4px 12px -2px rgba(40, 35, 25, 0.03)',
        'wheel': '0 20px 50px -10px rgba(40, 35, 25, 0.1), 0 8px 20px -5px rgba(40, 35, 25, 0.05)',
        'button-hover': '0 6px 20px -2px rgba(184, 149, 85, 0.25)',
      },
    },
  },
  plugins: [],
}
