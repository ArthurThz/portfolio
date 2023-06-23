/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        outfit: "var(--font-outfit)",
        openSans: "var(--font-openSans)",
      },

      colors: {
        astronaut: {
          50: "#f1f6fd",
          100: "#dfebfa",
          200: "#c6dcf7",
          300: "#9ec5f2",
          400: "#70a6ea",
          500: "#4e86e3",
          600: "#3a6ad6",
          700: "#3056c5",
          800: "#2d47a0",
          900: "#283d7b",
          950: "#1d284e",
        },

        ebony: {
          50: "#f3f5fa",
          100: "#d6dbf1",
          200: "#aeb7e1",
          300: "#7d87cb",
          400: "#525caf",
          500: "#394193",
          600: "#2b3076",
          700: "#26295f",
          800: "#22244d",
          900: "#202141",
          950: "#04040b",
        },
      },
    },
  },
  plugins: [],
};
