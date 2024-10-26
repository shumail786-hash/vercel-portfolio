/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      widest: "3px",
    },
    extend: {
      animation: {
        scaling: "scaling 1.3s ease-out infinite",
      },
      keyframes: {
        scaling: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
      },
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
