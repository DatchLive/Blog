module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pale-green": "#738E99",
        "pale-yellow": "#EEEAE4",
      },
      fontFamily: {
        courgette: '"Courgette", cursive',
        plus: '"M PLUS 1p", sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
