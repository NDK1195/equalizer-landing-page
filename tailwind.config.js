/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "66E2DC": "#66E2DC",
        FA7453: "#FA7453",
        FFB964: "#FFB964",
        FCFAF9: "#FCFAF9",
        191826: "#191826",
      },
      backgroundImage: {
        "main-desktop": "url('../assets/bg-main-desktop.png')",
        "main-tablet": "url('../assets/bg-main-tablet.png')",
        "main-mobile": "url('../assets/bg-main-mobile.png')",
      },
    },
  },
  plugins: [],
};
