import React from "react";
import NavBar from "../NavBar/NavBar";
import { ContentContainerStyled, LayoutContainerStyled } from "./LayoutStyle";

const Layout = ({ children }) => {
  return (
    <LayoutContainerStyled>
      <NavBar></NavBar>
      <ContentContainerStyled> {children} </ContentContainerStyled>
    </LayoutContainerStyled>
  );
};

export default Layout;
