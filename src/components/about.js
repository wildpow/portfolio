import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const AboutContainer = styled.section`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Profile = styled(Img)`
  width: 50%;
`;

const AboutWrapper = styled.div`
  display: flex;
  aside {
    width: 50%;
  }
`;

const About = ({ profileImg }) => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <AboutWrapper>
        <Profile sizes={profileImg.childImageSharp.sizes} />
        <aside>
          <h4>What I hope to do</h4>
          <p>
            My mission as a developer is to contribute to applications that
            empower and improve lives. I believe that through code we can make
            the world a better place by building products that empower
            communities. Yes, let's change the world together!
          </p>
          <h4>What I'm doing</h4>
          <p>
            I recently{" "}
            <a
              href="https://medium.freecodecamp.org/my-journey-to-becoming-a-software-engineer-4ae301fc02b"
              target="_blank"
              rel="noopener noreferrer"
            >
              landed my first software engineer role
            </a>
            ,{" "}
            <a
              href="https://medium.freecodecamp.org/how-i-made-my-portfolio-website-blazing-fast-with-gatsby-82ccddc2f671"
              target="_blank"
              rel="noopener noreferrer"
            >
              made this website blazing fast with Gatsby
            </a>
            , and gave my first meetup talk. I am helping others as I advance in
            my career by sharing my experiences and perspectives through
            writing, speaking, and mentoring.
          </p>
          <p>
            On my free time, I attend meetups, listen to engineering podcasts,
            read tech blogs, and take other online courses in order to help me
            develop a growth mindset and become a better developer.
          </p>
        </aside>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
