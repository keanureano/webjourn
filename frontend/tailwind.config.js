/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Mulish", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          50: "#FDFDFC",
          100: "#FCFAF8",
          200: "#FAF6EF",
          300: "#FAF3E7",
          400: "#E8D5B5",
          500: "#CFB586",
          600: "#B29461",
          700: "#7E6C4E",
          800: "#4D473D",
          900: "#212122",
          950: "#0F1115",
        },
        secondary: {
          50: "#ECEEF8",
          100: "#DEE0F2",
          200: "#BBBFE2",
          300: "#9DA2D2",
          400: "#7C83C0",
          500: "#5F67AF",
          600: "#4B5290",
          700: "#3C4271",
          800: "#2C2F4F",
          900: "#1C1E30",
          950: "#0D0E17",
        },
        neutral: {
          50: "#FCFCFD",
          100: "#F2F2F3",
          200: "#DCDCE0",
          300: "#C6C6CD",
          400: "#B1B1B9",
          500: "#9B9BA6",
          600: "#868693",
          700: "#71717F",
          800: "#4A4A54",
          900: "#26262B",
          950: "#131316",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
