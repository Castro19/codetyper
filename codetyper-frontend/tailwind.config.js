/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#f6ad55",
        accent: "#9f7aea",

        background: "#1E1E1E",
        primaryText: "#D4D4D4",
        accentBlue: "#569CD6",
        accentGreen: "#4EC9B0",
        secondaryText: "#808080",
        correctTyping: "#0DBC79",
        incorrectTyping: "#E06C75",
        untypedText: "#c9c9c9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
