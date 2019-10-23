import React from "react";
import { ScrollingProvider } from "react-scroll-section";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

const globalStyles = css`
  ${emotionNormalize}
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  @import url("https://fonts.googleapis.com/css?family=Merriweather:400,900|Montserrat:400,700,900&display=swap");
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
