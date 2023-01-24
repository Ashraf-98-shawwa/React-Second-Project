import React from "react";
import styled from "styled-components";
import FormFooter from "../Components/FormFooter";
import LoginForm from "../Components/LoginForm";

const LoginPage = styled.section`
`;

export default function Login() {

  return (
    <LoginPage>
        <LoginForm />
        <FormFooter />
    </LoginPage>
  );
}
