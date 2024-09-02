/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zodiak', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
