/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#127dff",
        primary_hover: "#1373e8",
        category_lits: "#4f4f4f",
      },
    },
  },
  plugins: [],
};
