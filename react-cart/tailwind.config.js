import { mtConfig } from "@material-tailwind/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [mtConfig],
}


// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
