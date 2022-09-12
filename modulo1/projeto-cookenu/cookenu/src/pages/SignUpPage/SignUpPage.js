import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { ScreenContainer } from "./styled";

const SignUpPage = ({ setRightButtonText }) => {
  useUnprotectedPage();

  return (
    <>
      <ScreenContainer>
        <SignUpForm setRightButtonText={setRightButtonText} />
      </ScreenContainer>
    </>
  );
};

export default SignUpPage;
