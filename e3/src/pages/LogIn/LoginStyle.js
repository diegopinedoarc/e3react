import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  gap: 2rem;
`;
export const LoginTitle = styled.h2`
  text-align: center;
  color: var(--verdeoscuro);
`;

export const InputsLog = styled.input`
  width: 12rem;
  height: 2rem;
  background-color: var(--verdeoscuro);
  border: none;
  border-radius: 0.4rem;
  color: var(--blanco);
  text-align: center;
`;

export const LogButton = styled.button`
  width: 12rem;
  height: 2rem;
  background-color: var(--verdeoscuro);
  border: none;
  border-radius: 0.4rem;
  color: var(--blanco);
  font-weight: bold;
  box-shadow: 10px 10px 30px rgba(250, 20, 182, 0.4), -2px -2px 5px #ffffff;
  cursor: pointer;
`;

export const LogForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  gap: 2rem;
  box-shadow: 10px 10px 30px var(--verdeoscuro);
  cursor: pointer;
  width: 24rem;
  border: none;
  border-radius: 0.4rem;
  padding: 2rem;
`;
