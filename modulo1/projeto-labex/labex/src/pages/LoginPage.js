import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminPage } from "../routes/coordinator";

export const LoginPage = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmail = (event) => {
    setEmailInput(event.target.value);
  };

  const handlePassword = (event) => {
    setPasswordInput(event.target.value);
  };

  const logarUsuario = () => {
    const body = {
      email: emailInput,
      password: passwordInput,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriella-lemos-franklin/login`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((reponse) => {
        localStorage.setItem("token", reponse.data.token);
        goToAdminPage(navigate);
        // console.log(reponse.data.token);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.code);
      });
  };

  const navigate = useNavigate();

  // const goToAdminPage = () => {
  //   navigate("/admin/trips/list");
  // };
  return (
    <>
      <p> Página Login Page</p>
      <input onChange={handleEmail} value={emailInput}></input>
      <input onChange={handlePassword} value={passwordInput}></input>
      <button onClick={logarUsuario}>entrar</button>
    </>
  );
};
