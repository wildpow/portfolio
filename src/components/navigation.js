import React from "react";
import styled from "@emotion/styled";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Flex, Box, Link, Text } from "rebass";
import NavBar from "./navBar";

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
const Container = props => (
  <Link
    as="div"
    variant="nav"
    href="#!"
    sx={{
      textDecoration: "none",
      fontFamily: "monospace",
      fontSize: [3, 4, 5]
    }}
  >
    <AnchorLink href={props.href}>{props.title}</AnchorLink>
  </Link>
);
const Navigation = ({ activeSection }) => {
  return (
    <NavBar>
      <Text
        p={3}
        fontWeight="bold"
        sx={{
          fontSize: 5
        }}
      >
        Aaron Wilder
      </Text>
      <Box>
        <Container title="About" href="#about" />
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
        <hr />
      </Box>
    </NavBar>

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
