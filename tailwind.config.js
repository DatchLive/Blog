module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      maincolor: "#738E99",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
