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
      },
      colors: {
        'medium-light-shade-magenta': '#CB6BE5',
        'Topaz': '#7D7987',
        'know-more': '#4089ED'
      },
    },
  },
  plugins: [daisyui],
}

