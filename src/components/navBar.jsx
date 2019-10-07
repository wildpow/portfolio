import React from "react";
import styled from "@emotion/styled";
import { useHasScrolled } from "../hooks/useHasScrolled";
import { Flex } from "rebass";

const NavBarContainer = styled(Flex)`
  background: ${props => (props.hasScrolled ? "white" : " transparent")};
  color: ${props => (props.hasScrolled ? "#5a8dca" : "white")};
  box-shadow: ${props =>
    props.hasScrolled ? "0px 6px 6px -6px rgba(52, 52, 52, 0.41)" : "none"};
  position: fixed;
  width: 100%;
  z-index: 2;
  transition: all 1s ease-in-out;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = ({ children }) => {
  const scroll = useHasScrolled(200);
  return (
    <NavBarContainer as="nav" hasScrolled={scroll}>
      {children}
    </NavBarContainer>
  );
};

export default NavBar;
