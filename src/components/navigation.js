import React from "react";
import styled from "styled-components";

const NavWrapper = styled.header`
  background: transparent;
  position: fixed;
  z-index: 2;
  display: flex;
  h1 {
    color: white;
  }
`;
const Navigation = () => {
  return (
    <NavWrapper>
      <h1>Aaron Wilder</h1>
      <h1>About Me</h1>
      <h1>Projects</h1>
      <h1>Contact</h1>
    </NavWrapper>
  );
};

export default Navigation;
