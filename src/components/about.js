import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const AboutContainer = styled.section`
  width: 100vw;
  /* height: calc(100vh - 80px); */
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

const About = React.forwardRef((props, ref) => {
  return (
    <AboutContainer id="about" ref={ref} {...props}>
      <h1>About Me</h1>
      <AboutWrapper>
        <Profile sizes={props.profileImg.childImageSharp.sizes} />
        <aside></aside>
      </AboutWrapper>
    </AboutContainer>
  );
});

export default About;
