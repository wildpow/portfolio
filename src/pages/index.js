import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import { useIntersect } from "../hooks/useIntersect";
import Navigation from "../components/navigation";
import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
${styledNormalize}
html {
  box-sizing: border-box;
  
}
*, *:before, *:after {
  box-sizing: inherit;
}
@import url('https://fonts.googleapis.com/css?family=Merriweather:400,900|Montserrat:400,700,900&display=swap');
${
  "" /* @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700|Oswald:400,700&display=swap'); */
}
${
  "" /* @import url('https://fonts.googleapis.com/css?family=Istok+Web|Lora&display=swap'); */
}

`;
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.bg};
`;

const IndexPage = ({ data }) => {
  const [ref, entry] = useIntersect({ rootMargin: "20px", threshold: 0.2 });
  return (
    <div>
      <GlobalStyle />
      <Navigation hasScrolled={entry.isIntersecting} />
      <div style={{ height: "100vh", width: "100vw" }}>
        <Hero heroImg={data.heroImg} />
      </div>
      {console.log("vis", entry.isVisible, "isInt", entry.isIntersecting)}
      <div ref={ref} style={{ height: "100vh", width: "100vw" }}>
        <About profileImg={data.profileImg} />
      </div>
      <Projects />
      <Contact />
    </div>
  );
};

export const imgQuery = graphql`
  query allImgsQuery {
    heroImg: file(relativePath: { eq: "hero/hawaii3.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2400) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    profileImg: file(relativePath: { eq: "Portraits-125.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 420, maxHeight: 630) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
