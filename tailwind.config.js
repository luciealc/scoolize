/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-red": '#910000',
      "light-red": "#FF1212",
      "dark-blue": "#000091",
      "light-blue": "#1212FF",
      "white": "#FFFFFF",
      "black": "#000000"
    },
    fontFamily: {
      'marianne': ['Marianne']
    }
  },
  plugins: [],
};
