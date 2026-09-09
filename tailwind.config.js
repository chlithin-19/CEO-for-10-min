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
          primary: '#F5F3EE',
          surface: '#FFFFFF',
          secondary: '#EDEAE2',
        },
        gold: {
          primary: '#B58A45',
          dark: '#8F6B32',
          subtle: 'rgba(181, 138, 69, 0.1)',
          border: 'rgba(181, 138, 69, 0.35)',
          hover: '#B58A45',
        },
        luxury: {
          text: '#111111',
          secondary: '#4A4843',
          muted: '#7A766F',
          border: 'rgba(17, 17, 17, 0.12)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        'executive-card': '0 8px 30px rgba(17, 17, 17, 0.07), 0 2px 8px rgba(181, 138, 69, 0.04)',
        'executive-hover': '0 16px 40px rgba(17, 17, 17, 0.12), 0 4px 12px rgba(181, 138, 69, 0.08)',
        'wheel-bold': '0 25px 60px -12px rgba(17, 17, 17, 0.18), 0 10px 24px -6px rgba(181, 138, 69, 0.12)',
        'button-command': '0 6px 20px rgba(17, 17, 17, 0.25)',
      },
    },
  },
  plugins: [],
}
