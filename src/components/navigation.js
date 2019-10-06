import React from "react";
import styled, { css } from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useHasScrolled } from "../hooks/useHasScrolled";

const NavBar = styled.nav`
  transition: all 1s ease;
  font-family: "Merriweather", serif;
  /* font-family: "Oswald", sans-serif; */
  /* font-family: "Montserrat", sans-serif; */
  /* font-family: "Montserrat", sans-serif; */
  /* font-family: "Istok Web", sans-serif; */
  font-weight: 700;
  background: ${props => (props.hasScrolled ? "white" : " transparent")};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  /* opacity: ${props => (props.hasScrolled ? 0.9 : 1)}; */
  color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
  box-shadow: ${props =>
    props.hasScrolled ? "0px 6px 6px -6px rgba(52, 52, 52, 0.41)" : "none"};
`;
const NavLinks = styled.ul`
  transition: all 1s ease;
  list-style: none;
  display: flex;
  /* li a {
    display: inline-block;
    padding: 10px 15px;
    font-size: 1.6rem;
    text-decoration: none;
    color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
  } */
`;

const Links = css`
  display: inline-block;
  padding: 10px 15px;
  font-size: 1.6rem;
`;
const Brand = styled(AnchorLink)`
  transition: all 1s ease;
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;
  color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
  font-size: 2rem;
`;
const About = styled(AnchorLink)`
  ${Links}
  text-decoration: ${props =>
    props.activeSection === 1 ? "underline" : "none"};
  color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
`;
const Projects = styled(AnchorLink)`
  ${Links}
  text-decoration: ${props =>
    props.activeSection === 2 ? "underline" : "none"};
  color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
`;
const Contact = styled(AnchorLink)`
  ${Links}
  text-decoration: ${props =>
    props.activeSection === 3 ? "underline" : "none"};
  color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
`;

const Navigation = ({ activeSection }) => {
  const scroll = useHasScrolled(200);
  return (
    <NavBar hasScrolled={scroll}>
      <Brand hasScrolled={scroll} href="#top">
        Aaron Wilder
      </Brand>
      <NavLinks hasScrolled={scroll}>
        <li>
          <About
            hasScrolled={scroll}
            activeSection={activeSection}
            href="#about"
          >
            About Me
          </About>
        </li>
        <li>
          <Projects
            hasScrolled={scroll}
            activeSection={activeSection}
            href="#projects"
          >
            Projects
          </Projects>
        </li>
        <li>
          <Contact
            hasScrolled={scroll}
            activeSection={activeSection}
            href="#contact"
          >
            Contact
          </Contact>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Navigation;
