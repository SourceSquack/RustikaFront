/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#556B2F",
        bonds: "#f8f8f8",
      },
    },
  },
  plugins: [require("flowbite/plugin"),
  require("@tailwindcss/line-clamp")],
};
