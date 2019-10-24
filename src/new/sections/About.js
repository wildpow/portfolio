import React from "react";
import { Box, Image, Flex } from "rebass";
import Triangle from "../components/Triangle";
import Section from "../components/Section";

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={["50vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={["20vh", "40vh"]}
      width={["75vw", "70vw"]}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={["25vh", "20vh"]}
      width={["100vw", "100vw"]}
    />
  </div>
);

const About = () => (
  <Section.Container id="about" Background={Background}>
    <h1>about</h1>
  </Section.Container>
);

export default About;
