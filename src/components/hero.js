import React from "react";
import styled, { keyframes } from "styled-components";
import Img from "gatsby-image";

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const Pulse = keyframes`
from {
  opacity: 0;
  transform: matrix(1, 0, 0, 1, 0, 20);
}
to {

  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
`;
const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// #3173b3
// #337ab7
const Overlay = styled.div`
  background: #3173b3;
  position: absolute;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-bottom-style: solid;
  border-bottom-width: thin;
  top: 0;
  left: 0;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`;
const HeroText = styled.div`
  margin: 0;
  color: white;
  text-align: center;
  animation-name: ${Pulse};
  animation-duration: 1.5s;
  animation-fill-mode: both;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  h1 {
    font-size: 4.2rem;
    font-weight: 900;
    line-height: 96px;
    margin: 0px;
  }
  p {
    font-family: "Merriweather", serif;
    font-weight: 700;
    font-size: 1.3rem;
    margin-top: 0px;
    padding-top: 0px;
  }
`;
const Hero = React.forwardRef((props, ref) => (
  <HeroWrapper id="top" ref={ref} {...props}>
    <Img
      sizes={props.heroImg.childImageSharp.sizes}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }}
    />
    <Overlay />
    <HeroText>
      <h1>Hi, I'm Aaron</h1>
      <p>Always looking for a new adventure.</p>
    </HeroText>
  </HeroWrapper>
));

export default Hero;
