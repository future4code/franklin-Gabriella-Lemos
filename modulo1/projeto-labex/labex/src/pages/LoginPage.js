import axios from "axios";
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminPage } from "../routes/coordinator";
import useForm from "../hooks/useForm";

// const useForm = (inicialState) => {
//   const [form, setForm] = useState(inicialState);

//   const onChange = (event) => {
//     const { name, value } = event.target;
//     setForm({ ...form, [name]: value });
//   };
// };

export const LoginPage = () => {
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleEmail = (event) => {
  //   setForm({ ...form, email: event.target.value });
  //   // setEma(event.target.value);
  // };

  // const handlePassword = (event) => {
  //   setForm({ ...form, password: event.target.value });
  // };

  // const onChange = (event) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // };

  console.log(form);
  const logarUsuario = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriella-lemos-franklin/login`,
        form,
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
      });
  };

  const navigate = useNavigate();

  return (
    <>
      <p> Página Login Page</p>
      <form onSubmit={logarUsuario}>
        <input
          name="email"
          onChange={onChange}
          value={form.email}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="O campo deve obedecer o formato de e- mail"
          type="email"
        ></input>
        <input
          name="password"
          onChange={onChange}
          type="password"
          value={form.password}
          required
          pattern="[a-z0-9.@%+-]{6}"
          title="A senha deve conter 6 dígitos com letras, números e/ou caracteres especiais"
        ></input>
        <button>entrar</button>
      </form>
    </>
  );
};
