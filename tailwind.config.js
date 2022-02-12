module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-section":
          "url('https://res.cloudinary.com/ddwguc7vu/image/upload/v1644555086/herosection_dxki02.jpg')",
      },
      colors: {
        bgBlur: "#F0F7FE",
      },
      screens: {
        lgr: "1440px",
      },
    },
  },
  plugins: [],
};
