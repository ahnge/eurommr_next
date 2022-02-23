module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        text_wm: "#1B1E1F",
        text_dm: "#F3F3F3",
        lb1: "#FDFDFD",
        lb2: "#E1E5E9",
        db1: "#1C1C1C",
        db2: "#161616",
        hover: "#3B4244",
        active: "#1B1E1F",
        eu_yel: "#FFE500",
      },
      screens: {
        lgr: "1430px",
        xlr: "1910px",
      },
    },
  },
  plugins: [],
};
