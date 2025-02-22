 /** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
 
 export default {
  content: ["./exercises/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      c1: "#FEFAF6",
      c2: "#EADBC8",
      c3: "#DAC0A3",
      c4: "#102C57",
      amber: "#fbbf24",
    },
  },
  plugins: [],
}