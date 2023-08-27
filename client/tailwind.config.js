/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#127dff",
        primary_hover: "#1373e8",
        primary_border: "#3b93ff",
        category_lits: "#4f4f4f",
        addToCart: "#0e3a78",
        addToCartHover: "#0d3369",
      },
      height: {
        120: "35rem",
      },
    },
  },
  plugins: [],
};
