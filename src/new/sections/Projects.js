import React from "react";
import Triangle from "../components/Triangle";
import Section from "../components/Section";

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={["80vh", "80vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color="background"
      height={["50vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={["25vh", "40vh"]}
      width={["75vw", "60vw"]}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={["25vh", "20vh"]}
      width={["100vw", "100vw"]}
      invertY
    />
  </div>
);

const Projects = () => (
  <Section.Container id="projects" Background={Background}>
    <h1>Projects</h1>
  </Section.Container>
);

export default Projects;
