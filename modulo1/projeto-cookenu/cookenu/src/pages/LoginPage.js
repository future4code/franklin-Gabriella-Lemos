import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLists, goToCadastro } from "../routers/coordinator";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputSenha = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <h2> Login </h2>
      <input onChange={handleInputEmail} value={email}></input>
      <input onChange={handleInputSenha} value={password}></input>

      <button onClick={() => goToLists(navigate)}>lista de receitas</button>
      <button onClick={() => goToCadastro(navigate)}>cadastre-se</button>
    </>
  );
};

export default LoginPage;
