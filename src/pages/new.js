import React from "react";
import Landing from "../new/sections/Landing";
import Layout from "../new/components/Layout";
import About from "../new/sections/About";
import Projects from "../new/sections/Projects";
import Contact from "../new/sections/Contact";
import Header from "../new/components/Header";

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
