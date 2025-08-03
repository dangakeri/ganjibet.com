import { orange } from "@mui/material/colors";

const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FF6D00",
        secondary: "#23313d",
        bgheader: "#fff",
        textGrey: "#F1F5F9",
        bgBody: "#1C2A36",
      },
    },
    screens: {
      xs: { max: "639px" },
      lg: { min: "1024px" },
      md: { min: "768px" },
    },
    animation: {
      "spin-fast": "spin 0.5s linear infinite",
    },
  },
  plugins: [],
};
