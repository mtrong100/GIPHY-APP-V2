/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      colors: {
        primary: "#18122B",
        purpleColor: "#6C4AB6",
        pinkColor: "#F62682",
        orangeColor: "#FF6651",
        blueColor: "#2cccff",
        greenColor: "#20E3B2",
        yellowColor: "#FFFF00",
      },
      backgroundImage: {
        /* BACKGROUND-COVER */
        contactBg:
          "linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.5)),url(../src/assets/sunset-bg.jpg)",

        /* GRADIENT-COLOR */
        gradientColor_1: "linear-gradient(to right, #2cccff 0%, #20e3b2 100%)",
        gradientColor_2: "linear-gradient(to right, #FF6651 0%, #FFFF00 100%)",
        gradientColor_3: "linear-gradient(to right top, #20E3B2, #FFFF00)",
        gradientColor_4: "linear-gradient(to right bottom, #6a5af9, #f62682)",
        gradientColor_5: "linear-gradient(to right, #f953c6,#b91d73)",
        gradientColor_6: "linear-gradient(to right, #ee0979, #ff6a00)",
        gradientColor_7: "linear-gradient(to right, #8E2DE2, #4A00E0)",
        gradientColor_8: "linear-gradient(to right , #41295a, #2F0743)",
        gradientColor_9: "linear-gradient(to right , #bc4e9c, #f80759)",

        /* REVERSE GRADIENT-COLOR */
        reverseGradientColor_4:
          "linear-gradient(to left top, #6a5af9, #f62682)",
      },
    },
  },
  plugins: [],
};
