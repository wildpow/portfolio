import React from "react";
import styled from "@emotion/styled";

const ProjectContainer = styled.section`
  width: 100vw;
  /* height: calc(100vh - 80px); */
  height: 100vh;
  background: yellow;
`;
const Projects = React.forwardRef((props, ref) => (
  <ProjectContainer id="projects" ref={ref} {...props}></ProjectContainer>
));

export default Projects;
