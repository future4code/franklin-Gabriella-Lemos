import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { goToSignUpPage } from "../../routers/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({ rightButtonText, setRightButtonText }) => {
  const navigate = useNavigate();
  useUnprotectedPage();

  return (
    <>
      <ScreenContainer>
        <LogoImage src={logo} />
        <LoginForm
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />

        <SignUpButtonContainer>
          <Button
            type={"onSubmit"}
            fullWidth
            variant="text"
            color="primary"
            margin="normal"
            onClick={() => {
              goToSignUpPage(navigate);
            }}
          >
            {" "}
            Não possui conta? Cadastre-se
          </Button>
        </SignUpButtonContainer>
      </ScreenContainer>
    </>
  );
};

export default LoginPage;
