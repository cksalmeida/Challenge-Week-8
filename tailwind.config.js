/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#02E7F5",
        primary: {
          100: "#67BDFF",
          200: "#068DFF",
          300: "#037AEB",
          400: "#0063E5",
          500: "#00386C",
        },
        neutral: {
          ...colors.neutral,
          100: "#F9F9F9",
          200: "#C8C9CB",
          300: "#74757D",
          400: "#5F6169",
          500: "#30333E",
          600: "#1A1D29",
          700: "#101116",
        },
      },
      opacity: {
        4: "0.04",
        12: "0.12",
      },
      fontSize: {
        "44px": "2.75rem",
        "32px": "2rem",
      },
      lineHeight: {
        "51px": "3.225rem",
        "37px": "2.346875rem",
      },
      borderRadius: {
        "20px": "20px",
      },
      backgroundImage: {
        loginBg: "url('../src/assets/loginBg.png')",
      },
    },
  },
  plugins: [],
};
