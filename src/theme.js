import merge from "lodash/fp/merge";
import preset from "@rebass/preset";

export default merge(preset, {
  // colors: {
  //   // custom primary color
  //   primary: 'tomato',
  // }
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Merriweather, serif"
  }
});
