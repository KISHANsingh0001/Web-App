/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
      colors: {
        'medium-light-shade-magenta': '#CB6BE5',
        'Topaz': '#7D7987',
        'know-more': '#4089ED',
        'stateBlue': '#2445B9',
      },
    },
  },
  plugins: [daisyui],
}

