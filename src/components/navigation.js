import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = styled.nav`
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
`;
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  li a {
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
    color: white;
  }
`;
const Brand = styled(AnchorLink)`
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 25px;
`;
const Navigation = () => {
  return (
    <NavBar>
      <Brand href="#top">AARON WILDER</Brand>
      <NavLinks>
        <li>
          <AnchorLink href="#about">ABOUT ME</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects">PROJECTS</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">CONTACT</AnchorLink>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Navigation;
