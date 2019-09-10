import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/hero";
import About from "../components/about";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero heroImg={data.heroImg} />
    <About profileImg={data.profileImg} />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
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
