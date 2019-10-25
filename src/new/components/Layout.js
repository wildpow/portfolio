import React from "react";
import { ScrollingProvider } from "react-scroll-section";
import { Global, css } from "@emotion/core";
import config from "react-reveal/globals";
import emotionNormalize from "emotion-normalize";
require("typeface-open-sans");
require("typeface-cabin");

config({ ssrFadeout: true });

const globalStyles = css`
  ${"" /* ${emotionNormalize} */}
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: Cabin, "Open Sans", sans-serif;
    font-display: swap;
    font-display: fallback;
    overflow-x: hidden;
  }
`;
const Layout = ({ children }) => {
  return (
    <main>
      <Global styles={globalStyles} />
      <ScrollingProvider>{children}</ScrollingProvider>
    </main>
  );
};

export default Layout;
