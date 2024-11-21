import {nextui} from '@nextui-org/theme'

const fontSize = require('./config/typography/fontSize');
const fontFamily = require('./config/typography/fontFamily.ts');
const colors = require('./config/abstracts/colors.ts');
const letterSpacing = require('./config/typography/letterSpacing');
const screens = require('./config/abstracts/screens.ts');
const boxShadow = require('./config/abstracts/shadows.ts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      screens,
      fontFamily,
      fontSize,
      letterSpacing,
      boxShadow,
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
