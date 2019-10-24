import React from "react";
import Section from "../components/Section";
import Triangle from "../components/Triangle";

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={["15vh", "10vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color="secondary"
      height={["50vh", "40vh"]}
      width={["70vw", "40vw"]}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={["40vh", "15vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
);

const Contact = () => (
  <Section.Container id="contact" Background={Background}>
    <h1>Contact</h1>
  </Section.Container>
);

export default Contact;
