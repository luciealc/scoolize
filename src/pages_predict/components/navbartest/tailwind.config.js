/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          button: "var(--button)",
        },
      },
    },
    plugins: [],
  };
  