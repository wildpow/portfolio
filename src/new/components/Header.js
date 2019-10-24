import React from "react";
import Headroom from "react-headroom";
import styled from "@emotion/styled";
import { Item } from "./navLink";

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;
const Header = () => (
  <HeaderContainer>
    <div>
      <h1>HEADER!!!!!!!!!!</h1>
      <ul style={{ display: "flex" }}>
        <Item section="home">Home</Item>
        <Item section="about">About</Item>
        <Item section="projects">Home</Item>
        <Item section="contact">Home</Item>
      </ul>
    </div>
  </HeaderContainer>
);
export default Header;
