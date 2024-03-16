/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  darkMode: "class", // os darkmode에 영향받지 않도록 추가
  plugins: [
    require("tailwind-scrollbar-hide")
  ]
});
