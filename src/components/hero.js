import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;
// #3173b3
// #337ab7
const Overlay = styled.div`
  background: #3173b3;
  /* background: black; */
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
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  h1 {
    font-size: 80px;
    font-weight: 900;
    line-height: 96px;
    margin: 10px;
  }
  p {
    font-family: "Merriweather", serif;

    font-weight: 700;
    font-size: 30px;
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
      <p>A full-stack developer</p>
    </HeroText>
  </HeroWrapper>
));

export default Hero;
