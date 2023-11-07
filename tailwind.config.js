/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "mobile-S": "320px",
      "mobile-M": "375px",
      "mobile-L": "425px",
      "tablet": "768px",
      "desktop": "1024px",
      "desktop-L": "1440px",
    },
    extend: {
      colors: {
        "black-primary": "#404040",
        "black-second": "#404040",
        "red-primary": "#e00000",
        "yellow-primary": "#fff250",
        "yellow-second": "#FBD336",
        "white-primary": "#f7f7f7",
        "gray-primary": "#d3d3d3",
      },
      fontFamily: {
        primary: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
