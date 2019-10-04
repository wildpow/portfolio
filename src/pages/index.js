import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage = ({ data }) => (
  <Layout id="contact">
    <SEO title="Home" />
    <Hero heroImg={data.heroImg} />
    <About profileImg={data.profileImg} />
    <Projects />
    <Contact />
  </Layout>
);

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
