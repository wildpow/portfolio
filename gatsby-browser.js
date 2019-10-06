/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import theme2 from "@rebass/preset-material";

import React from "react";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme2}>{element}</ThemeProvider>;
};
