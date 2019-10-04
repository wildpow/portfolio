import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: blue;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1>Contact</h1>
    </ContactContainer>
  );
};

export default Contact;
