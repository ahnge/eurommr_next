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
        lb2: "#F7F7F7",
        db1: "#1C1C1C",
        db2: "#161616",
        hover_l: "#F0F7FE",
      },
      screens: {
        lgr: "1430px",
        xlr: "1910px",
      },
    },
  },
  plugins: [],
};
