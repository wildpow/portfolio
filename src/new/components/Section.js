import React from "react";
import styled from "@emotion/styled";
import { Section } from "react-scroll-section";

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;
const DefaultBackground = () => <div />;

const Container = ({ id, children, Background = DefaultBackground }) => (
  <Section id={id} style={{ position: "relative" }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

export default {
  Container
};
