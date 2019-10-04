import React from "react";
import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
const GlobalStyle = createGlobalStyle`
${styledNormalize}
html {
  box-sizing: border-box;
  
}
*, *:before, *:after {
  box-sizing: inherit;
}

@import url('https://fonts.googleapis.com/css?family=Istok+Web|Lora&display=swap');

`;
// @import url("https://fonts.googleapis.com/css?family=Lora|Open+Sans:300,400");
// @import url('https://fonts.googleapis.com/css?family=Istok+Web|Lora:400,700&display=swap');

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
