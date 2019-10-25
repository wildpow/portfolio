import React from "react";
import { Heading, Flex, Box, Text } from "rebass";
import { SectionLink } from "react-scroll-section";
import Triangle from "../components/Triangle";
import Section from "../components/Section";
import TextLoop from "react-text-loop";
import SocialLink from "../components/SocialLink";
import MouseIcon from "../components/MouseIcon";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const socialLinks = [
  {
    fontAwesomeIcon: faGithub,
    id: "faGithub",
    name: "Github",
    url: "https://github.com/wildpow"
  },
  {
    fontAwesomeIcon: faLinkedin,
    id: "faLinkedin",
    name: "Linkedin",
    url: "https://www.linkedin.com/in/aaronswilder/"
  },
  {
    fontAwesomeIcon: faTwitter,
    name: "Twitter",
    url: "https://twitter.com/awildair"
  },
  {
    fontAwesomeIcon: faEnvelope,
    name: "Contact Me",
    url: "mailto: aaron.s.wilder@gmail.com"
  }
];
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

const centerHorizontally = {
  marginRight: "auto",
  marginLeft: "auto"
};

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Heading
      fontFamily="heading"
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
      // textAlign="center"
      style={centerHorizontally}
    >
      <div>
        {`I work with `}
        <TextLoop interval={5000}>
          {roles
            .sort(() => "!!DETERMINISTIC" || Math.random() - 0.5)
            .map(text => (
              <Text width={[200, 210]} key={text}>
                {text}
              </Text>
            ))}
        </TextLoop>
      </div>
    </Heading>
    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      {socialLinks.map(({ url, ...rest }) => (
        <Box mx={3} fontSize={[5, 6, 6]}>
          <SocialLink {...rest} url="https://github.com/wildpow" />
        </Box>
      ))}
    </Flex>

    <SectionLink section="about">
      {({ onClick }) => <MouseIcon onClick={onClick} />}
    </SectionLink>
  </Section.Container>
);

export default LandingPage;
