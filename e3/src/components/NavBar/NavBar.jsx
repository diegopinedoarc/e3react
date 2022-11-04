import React from "react";
import { NavbarContainerStyled, NavbarStyled } from "./NavBarStyles";
import LinkItem from "../LinkItem/LinkItem";

const NavBar = () => {
  return (
    <NavbarContainerStyled>
      <NavbarStyled>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="todo">ToDo</LinkItem>
        <LinkItem to="buscadorpoke">Pokes</LinkItem>
        <LinkItem to="login">Log In</LinkItem>
      </NavbarStyled>
    </NavbarContainerStyled>
  );
};

export default NavBar;
