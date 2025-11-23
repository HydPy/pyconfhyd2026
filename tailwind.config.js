/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'selector', // Already correct
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFC466',
          100: '#FFBA4D',
          200: '#FFB133',
          300: '#FFA71A',
          400: '#FF9D00',
          500: '#E68D00',
          600: '#CC7E00',
          700: '#B36E00',
          800: '#995E00',
          900: '#804F00',
          950: '#663F00',
        },
        secondary: {
          50: '#FAA89D',
          100: '#F69689',
          200: '#F28476',
          300: '#EE7163',
          400: '#E95C4F',
          500: '#E3453A',
          600: '#DD2621',
          700: '#C3201C',
          800: '#A91A17',
          900: '#901512',
          950: '#78100D',
        },
        accent: {
          50: '#FEE79C',
          100: '#FEE389',
          200: '#FEDF75',
          300: '#FDDA5E',
          400: '#FDD641',
          500: '#FDD100',
          600: '#DFB800',
          700: '#C2A000',
          800: '#A58800',
          900: '#8A7100',
          950: '#6F5B00',
        },
        background: {
          light: '#FFF8F3',
          dark: '#1A202C',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
