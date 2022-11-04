import React from "react";
import { InputsLog, LoginContainer, LoginTitle } from "./LoginStyle";

const LogIn = () => {
  return (
    <LoginContainer>
      <LoginTitle>Ingresa a tu cuenta</LoginTitle>
      <InputsLog placeholder="Ingresa tu email" />
      <InputsLog placeholder="Ingresa tu contraseña" />
    </LoginContainer>
  );
};

export default LogIn;
