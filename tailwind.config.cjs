/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./styles/tailwind.config.js",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "720px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        "custom-b": "#212226",
        "custom-red": "#FF0000",
        "custom-gray": "#666666",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
