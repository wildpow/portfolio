import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const AboutContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: green;
`;

const Profile = styled(Img)`
  width: 200px;
`;

const AboutWrapper = styled.div`
  display: flex;
  aside {
    width: 50%;
  }
`;

const About = ({ profileImg }) => {
  return (
    <AboutContainer id="about">
      <h1>About Me</h1>
      <AboutWrapper>
        <Profile sizes={profileImg.childImageSharp.sizes} />
        <aside></aside>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
