import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { ScreenContainer } from "./styled";

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <>
      <ScreenContainer>
        <SignUpForm />
      </ScreenContainer>
    </>
  );
};

export default SignUpPage;
