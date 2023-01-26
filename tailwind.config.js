/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./styles/tailwind.config.js",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-b": "#212226",
        'custom-red': '#FF0000',
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
