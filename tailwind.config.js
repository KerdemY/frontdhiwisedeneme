module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white_A700_66: "#ffffff66",
        blue_gray_100: "#d5d5d5",
        black_900: "#000000",
        gray_900_7f: "#1515157f",
        gray_900_4c: "#1f1f1f4c",
        blue_gray_100_01: "#d9d9d9",
        gray_900: "#1f1f1f",
        gray_900_01: "#161616",
        white_A700_19: "#ffffff19",
        white_A700: "#ffffff",
        gray_100: "#f6f6f6",
      },
      fontFamily: { ggsans: "gg sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
