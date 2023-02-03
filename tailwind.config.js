/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./styles/tailwind.config.js",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '560px',
         'md': '692px',
         'lg': '1024px',
      },
      colors: {
        'custom-b': '#212226',
        'custom-red': '#FF0000',
        'custom-gray': '#666666',
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
