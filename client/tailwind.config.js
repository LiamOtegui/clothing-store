const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfairDisplay: ["Playfair Display", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      }
    },
  },
  plugins: [],
});