/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
// import Header from "./header";
// import "./layout.css";
const GlobalStyle = createGlobalStyle`
${styledNormalize}
@import url("https://fonts.googleapis.com/css?family=Lora|Open+Sans:300,400");
`;
// @import url('https://fonts.googleapis.com/css?family=Istok+Web|Lora:400,700&display=swap');
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
      {/* <Normalize /> */}
      <Navigation />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
