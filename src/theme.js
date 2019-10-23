import merge from "lodash/fp/merge";
import preset from "@rebass/preset";

export default merge(preset, {
  colors: {
    background: "#FFFFFF",
    backgroundDark: "#f0e6f6",

    primary: "#7c37ad",
    primaryLight: "#ae66df",
    primaryDark: "#4b007d",

    secondary: "#ff4081",
    secondaryLight: "#ff79b0",
    secondaryDark: "#c60055"
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Merriweather, serif"
  }
});
