/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        indent: "2rem",
      },
      screens: {
        "custom-1350": "1350px",
      },
    },
  },
  plugins: [],
};
