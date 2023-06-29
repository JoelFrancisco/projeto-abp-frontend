/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      blue: "#295E9D",
      green: "#69b75a",
    },
    extend: {
      borderRadius: {
        10: "0.625rem",
        40: "2.5rem",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
