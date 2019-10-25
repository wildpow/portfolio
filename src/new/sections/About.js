import React from "react";
import { Box, Image, Flex, Text } from "rebass";
import Triangle from "../components/Triangle";
import Section from "../components/Section";
import portrait from "../../images/face.png";
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";

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

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="👨🏼‍💼" label="person" />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Fade bottom>
          <Text as="p" lineHeight="2em">
            The spark to become a web developer ignited when I found out I was
            having my first kid. Now I want to utilize the skills I learned at
            Lambda School to find a career that I love.
          </Text>
        </Fade>
      </Box>
      <Box width={[1, 1, 2 / 6]} style={{ maxWidth: "300px", margin: "auto" }}>
        <Fade right>
          <ProfilePicture
            src={portrait}
            alt="Aaron Wilder all dressed up"
            mt={[4, 4, 0]}
            ml={[0, 0, 1]}
          />
        </Fade>
      </Box>
    </Flex>
  </Section.Container>
);

export default About;
