import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLists, goToCadastro } from "../routers/coordinator";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2> Login </h2>
      <button onClick={() => goToLists(navigate)}>lista de receitas</button>
      <button onClick={() => goToCadastro(navigate)}>cadastre-se</button>
    </>
  );
};

export default LoginPage;
