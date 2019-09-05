import React from "react";
import styled from "styled-components";

const NavWrapper = styled.header`
  background: transparent;
  width: 100%;
  position: fixed;
  z-index: 2;
  padding: 10px;
  transition: all 1s ease;
  border-bottom: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// const Navbar = styled.nav`
//   position: relative;
//   display: flex;
//   justify-content: space-around;
// `;
// const NavItems = styled.div`
//   display: flex;
//   width: 50%;
//   justify-content: space-evenly;
//   h1 {
//     font-weight: 500;
//     font-size: 16px;
//     color: white;
//   }
// `;
// const Brand = styled.h1`
//   font-weight: 500;
//   width: 50%;

//   font-size: 25px;
//   color: white;
// `;

const NavBar = styled.nav`
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
`;
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  li a {
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
    color: white;
  }
`;
const Brand = styled.a`
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 25px;
`;
const Navigation = () => {
  return (
    <>
      {/* <NavWrapper>
      <Navbar>
      <Brand>AARON WILDER</Brand>
      <NavItems>
        <h1>ABOUT ME</h1>
        <h1>PROJECTS</h1>
        <h1>COPNTACT</h1>
      </NavItems>
      </Navbar>
    </NavWrapper> */}
      <NavBar>
        <Brand href="#">AARON WILDER</Brand>
        <NavLinks>
          <li>
            <a href="#">ABOUT ME</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </NavLinks>
      </NavBar>
    </>
  );
};

export default Navigation;
