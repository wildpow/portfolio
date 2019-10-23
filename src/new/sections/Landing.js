import React from "react";
import { Heading, Flex, Box, Text } from "rebass";
import { SectionLink } from "react-scroll-section";
import Triangle from "../components/Triangle";
import Section from "../components/Section";
import TextLoop from "react-text-loop";
import SocialLink from "../components/SocialLink";
import MouseIcon from "../components/MouseIcon";
import { faGithub } from "@fortawesome/free-solid-svg-icons";

const roles = ["Gatsby", "JavaScript", "React", "GraphQl", "Node"];
const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={["35vh", "80vh"]}
      width={["95vw", "60vw"]}
    />

    <Triangle
      color="secondary"
      height={["38vh", "80vh"]}
      width={["50vw", "35vw"]}
    />

    <Triangle
      color="primaryDark"
      height={["25vh", "35vh"]}
      width={["75vw", "60vw"]}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Heading
      textAlign="center"
      as="h1"
      color="primary"
      fontSize={[5, 6, 8]}
      mb={[3, 4, 5]}
    >
      Hello, I'm Aaron
    </Heading>
    <Heading
      as="h2"
      color="primary"
      fontSize={[4, 5, 6]}
      mb={[3, 5]}
      textAlign="center"
      style={centerHorizontally}
    >
      <TextLoop interval={5000}>
        {roles
          .sort(() => Math.random() - 0.5)
          .map(text => (
            <Text width={[300, 500]} key={text}>
              {text}
            </Text>
          ))}
      </TextLoop>
    </Heading>

    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      <Box mx={3} fontSize={[5, 6, 6]}>
        <SocialLink
          fontAwesomeIcon={faGithub}
          name="Github"
          url="https://github.com/wildpow"
        />
      </Box>
      <Box mx={3} fontSize={[5, 6, 6]}>
        <SocialLink
          fontAwesomeIcon={faGithub}
          name="Github"
          url="https://github.com/wildpow"
        />
      </Box>
      <Box mx={3} fontSize={[5, 6, 6]}>
        <SocialLink
          fontAwesomeIcon={faGithub}
          name="Github"
          url="https://github.com/wildpow"
        />
      </Box>
      <Box mx={3} fontSize={[5, 6, 6]}>
        <SocialLink
          fontAwesomeIcon={faGithub}
          name="Github"
          url="https://github.com/wildpow"
        />
      </Box>
      <Box mx={3} fontSize={[5, 6, 6]}>
        <SocialLink
          color="primary"
          fontAwesomeIcon={faGithub}
          name="primary"
          url="https://github.com/wildpow"
        />
      </Box>
    </Flex>

    <SectionLink section="about">
      {({ onClick }) => <MouseIcon onClick={onClick} />}
    </SectionLink>
  </Section.Container>
);

export default LandingPage;
