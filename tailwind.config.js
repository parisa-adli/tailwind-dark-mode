module.exports = {
  content: ["./public/**/*.{html,js}" , "./src/js/theme.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
