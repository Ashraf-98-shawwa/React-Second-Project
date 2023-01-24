import React from "react";
import styled from "styled-components";
import FormFooter from "../Components/FormFooter";
import SignUpForm from "../Components/SignUpForm";

const SignUpPage = styled.section`
`;

export default function SignUp() {
  return (
    <SignUpPage>
        <SignUpForm />
        <FormFooter />
    </SignUpPage>
  );
}
