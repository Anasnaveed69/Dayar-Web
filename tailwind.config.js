/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dayar': {
          'gold': '#D4AF37',
          'light-gold': '#E6C547',
          'dark-gold': '#B8941F',
          'copper': '#CD853F',
          'charcoal': '#404040',
          'dark-charcoal': '#2F2F2F',
          'light-charcoal': '#505050',
          'cream': '#F5F5DC',
          'warm-white': '#FAFAFA',
          'brand-dark': '#3A3A3A',
          'brand-gold': '#D4AF37',
        }
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
