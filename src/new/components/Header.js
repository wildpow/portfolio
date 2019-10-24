import React from "react";
import Headroom from "react-headroom";
import styled from "@emotion/styled";

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;
const Header = () => (
  <HeaderContainer>
    <h1>HEADER!!!!!!!!!!</h1>
  </HeaderContainer>
);
export default Header;
