import React from "react";
// import styled from "styled-components";
import styled from "@emotion/styled";

const ContactContainer = styled.section`
  width: 100vw;
  /* height: calc(100vh - 80px); */
  height: 100vh;
  background: blue;
`;

const Contact = React.forwardRef((props, ref) => (
  <ContactContainer id="contact" ref={ref} {...props}></ContactContainer>
));

export default Contact;
