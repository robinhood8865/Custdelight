/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "user-main": "#812FBF",
        "user-main-hover": "#610BA1",
        "user-text": "#202020",
        "user-border": "#DCDCDC",
        "user-text-disable": "#84818A",
        "user-check-bg": "#009580",
        "user-dashbtn-bg": "#F6F6F6",
        "user-dashbtn-border": "#F7F7F7",
        "user-dash-grad1": "#B757FF",
        "user-dash-grad2": "#610BA1",
        "user-side-btn": "#F9F9F9",
        "user-side-btn-hover": "#FFA800",

        "user-gray": "#657378",
        "user-green": "#00B761",
        "user-line": "#054169",
        "user-light-blue": "#4285F4",
        "user-blue": "#057BFF",
        "user-dark-blue": "#054169",
        "user-light-gray": "#E5F8FD",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
});
