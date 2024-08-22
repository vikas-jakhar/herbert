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
        'lightOrange-gradient': "linear-gradient(241.09deg, rgba(255, 76, 36, 0.15) -34.32%, rgba(255, 227, 108, 0.15) 109.3%)",
      },
      container: {
        center: true,
        padding: "24px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1188px",
        },
      },
      fontFamily: {
        'rubik': "Rubik, sans-serif",
      },
      fontSize: {
        'custom-xl': "28px",
        'custom-2xl': "56px",
      },
      lineHeight: {
        'custom-xl': "56.88px",
        'custom-2xl': "66.36px",
      },
      colors: {
        lightRed: "#FF4C24",
        offOrange: "#FF9748",
        offGray: "#5F5F5F",
        offWhite: "#FFF8F2",
        offBlack: "#010101",
      },
      dropShadow: {
        'blue-sm': "1px 1px 0px blue",
      },
      boxShadow: {
        'black-border': "0px 0px 0px 2px white, 2px 2px 0px 2px black",
      },
    },
  },
  plugins: [],
};