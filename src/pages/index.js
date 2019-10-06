import React, { useRef } from "react";
import { graphql } from "gatsby";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Navigation from "../components/navigation";
import useScrollSpy from "../hooks/useScrollSpy";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

const IndexPage = ({ data }) => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -190
  });
  return (
    <div>
      <Global
        styles={css`
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
        `}
      />
      <Navigation activeSection={activeSection} />
      <Hero heroImg={data.heroImg} ref={sectionRefs[0]} />
      <About profileImg={data.profileImg} ref={sectionRefs[1]} />
      <Projects ref={sectionRefs[2]} />
      <Contact ref={sectionRefs[3]} />
    </div>
  );
};

export const imgQuery = graphql`
  query allImgsQuery {
    heroImg: file(relativePath: { eq: "hero/hawaii3.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2400) {
          ...GatsbyImageSharpSizes_withWebp
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
