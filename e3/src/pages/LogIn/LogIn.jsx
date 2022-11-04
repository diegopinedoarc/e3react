import React from "react";
import {
  InputsLog,
  LogButton,
  LogForm,
  LoginContainer,
  LoginTitle,
} from "./LoginStyle";

const LogIn = () => {
  return (
    <LoginContainer>
      <LogForm>
        <LoginTitle>Ingresa a tu cuenta</LoginTitle>
        <InputsLog placeholder="Ingresa tu email" type={"email"} />
        <InputsLog placeholder="Ingresa tu contraseña" type={"password"} />
        <LogButton>Ingresar</LogButton>
      </LogForm>
    </LoginContainer>
  );
};

export default LogIn;
