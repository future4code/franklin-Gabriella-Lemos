import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { goToSignUpPage } from "../../routers/coordinator";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScreenContainer>
        <LogoImage src={logo} />
        <LoginForm />

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

        {/* <input onChange={handleInputEmail} value={email}></input>
      <input onChange={handleInputSenha} value={password}></input> */}

        {/* <button onClick={() => goToLists(navigate)}>lista de receitas</button>
      <button onClick={() => goToCadastro(navigate)}>cadastre-se</button> */}
      </ScreenContainer>
    </>
  );
};

export default LoginPage;
