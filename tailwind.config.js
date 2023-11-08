/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        capri: "#22AACC",
        steelpink: "#C600CC",
        goldenrod: "#FFA525",
        purple: "#C600CC",
        frenchViolet: "#7D00D7",
        greybase: "#cccccc",
        cobaltblue: "#22215C",
      },
    },
  },
  plugins: [],
};
