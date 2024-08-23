/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode : "selector",
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E",
        primary : "#FF0000",
        secondary : "#475569"
      },
    },
  },
  plugins: [],
};
