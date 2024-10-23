/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cyborg: ["Cyborg", "sans-serif"],
      },
      colors: {
        logoBgColor: "#3b82f6",
        backgroundColor: "#10e956",
        bodyColor: "#050810",
      },
    },
  },
  plugins: [],
};
