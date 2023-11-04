/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fromRight: {
          "0%": { transform: "translatex(20px)", opacity: 0 },
          "100%": { transform: "translatex(0)", opacity: 1 },
        },
        fromLeft: {
          "0%": { transform: "translatex(-20px)", opacity: 0 },
          "100%": { transform: "translatex(0)", opacity: 1 },
        },
      },
    },
    animation: {
      appearFromLeft: "fromLeft 0.5s ease-in-out",
      appearFromRight: "fromRight 0.5s ease-in-out",
    },
    plugins: [],
  },
};
