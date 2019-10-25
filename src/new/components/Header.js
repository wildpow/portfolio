import React from "react";
import { Flex, Heading } from "rebass";
import Headroom from "react-headroom";
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";
import { SectionLinks } from "react-scroll-section";
import RouteLinks from "./RouteLink";
import Logo from "../../images/icon.png";
const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <SectionLinks>
          {({ allLinks }) => {
            return (
              <>
                <RouteLinks {...allLinks.home} name="Aaron Wilder" />
                <Flex mr={[0, 3, 5]}>
                  <RouteLinks {...allLinks.about} name="About" />
                  <RouteLinks {...allLinks.projects} name="Projects" />
                  <RouteLinks {...allLinks.contact} name="Contact" />
                </Flex>
              </>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);
export default Header;
