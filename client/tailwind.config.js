/** @type {import('tailwindcss').Config} */
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
        'custom-light-blue': '#EAF6FF',
        'medium-light-shade-magenta': '#CB6BE5',
        'Topaz': '#7D7987',
        'know-more': '#4089ED',
        'stateBlue': '#2445B9',
      },
    },
  },
}

