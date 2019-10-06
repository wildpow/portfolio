import React from "react";
import styled from "@emotion/styled";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useHasScrolled } from "../hooks/useHasScrolled";
import { Flex, Box, Link, Text } from "rebass";

const NavBar = styled.nav`
  transition: all 1s ease-in-out;
  font-family: "Merriweather", serif;
  font-weight: 700;
  background: ${props => (props.hasScrolled ? "white" : " transparent")};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
  box-shadow: ${props =>
    props.hasScrolled ? "0px 6px 6px -6px rgba(52, 52, 52, 0.41)" : "none"};
`;
const NavLinks = styled.ul`
  transition: all 1s ease;
  list-style: none;
  display: flex;
`;

const Brand = styled(AnchorLink)`
  transition: all 1s ease;
  padding: 3px 15px;
  display: inline-block;
  text-decoration: none;
  color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
  font-size: 1.5rem;
  :hover {
    color: #343434;
  }
`;

const StyledLink = styled(AnchorLink)`
  display: inline-block;
  padding: 3px 15px;
  font-size: 1.3rem;
  transition: all 1s ease;
  text-decoration: ${props =>
    props.activeSection === props.activeNumber ? "underline" : "none"};
  color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
  :hover {
    color: #343434;
  }
`;

const Navigation = ({ activeSection }) => {
  const scroll = useHasScrolled(200);
  return (
    <Flex px={2} color="white" bg="black" alignItems="center">
      <Text
        p={3}
        fontWeight="bold"
        sx={{
          fontSize: 5
        }}
      >
        Aaron Wilder
      </Text>
      <Box mx="auto" />
      <Link
        variant="nav"
        href="#!"
        sx={{
          fontFamily: "monospace",
          fontSize: [3, 4, 5]
        }}
      >
        About
      </Link>
      <Link
        variant="nav"
        href="#!"
        m
        sx={{
          fontFamily: "monospace",
          fontSize: [3, 4, 5]
        }}
      >
        Projects
      </Link>
      <Link
        variant="nav"
        href="#!"
        sx={{
          fontFamily: "monospace",
          fontSize: [3, 4, 5]
        }}
      >
        Contact
      </Link>
    </Flex>

    // <NavBar hasScrolled={scroll}>
    //   <Brand hasScrolled={scroll} href="#top">
    //     Aaron Wilder
    //   </Brand>
    //   <NavLinks hasScrolled={scroll}>
    //     <li>
    //       <StyledLink
    //         activeNumber={1}
    //         hasScrolled={scroll}
    //         activeSection={activeSection}
    //         href="#about"
    //       >
    //         About Me
    //       </StyledLink>
    //     </li>
    //     <li>
    //       <StyledLink
    //         activeNumber={2}
    //         hasScrolled={scroll}
    //         activeSection={activeSection}
    //         href="#projects"
    //       >
    //         Projects
    //       </StyledLink>
    //     </li>
    //     <li>
    //       <StyledLink
    //         activeNumber={3}
    //         hasScrolled={scroll}
    //         activeSection={activeSection}
    //         href="#contact"
    //       >
    //         Contact
    //       </StyledLink>
    //     </li>
    //   </NavLinks>
    // </NavBar>
  );
};

export default Navigation;
