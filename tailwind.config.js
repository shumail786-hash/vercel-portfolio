/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      widest: "3px",
    },
    extend: {
      fontFamily: {
        cyborg: ["Cyborg", "sans-serif"],
      },
      colors: {
        logoBgColor: "#3b82f6",
        backgroundColor: "#10e956",
        secondaryColor: "#0c8a34",
        bodyColor: "#191f27",
      },
    },
  },
  plugins: [],
};
