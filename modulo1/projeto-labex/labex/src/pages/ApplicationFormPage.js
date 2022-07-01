import axios from "axios";
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrips } from "../routes/coordinator";
import useForm from "../hooks/useForm";

export const ApplicationFormPage = () => {
  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  // const [inputViagem, setInputViagem] = useState();
  // const [inputNome, setInputNome] = useState();
  // const [inputIdade, setInputIdade] = useState();
  // const [inputTexto, setInputTexto] = useState();
  // const [inputJob, setInputJob] = useState();
  // const [inputPais, setInputPais] = useState();

  // const handleInputViagem = (event) => {
  //   setInputViagem(event.target.value);
  // };

  // const handleInputNome = (event) => {
  //   setInputNome(event.target.value);
  // };

  // const handleInputIdade = (event) => {
  //   setInputIdade(event.target.value);
  // };

  // const handleInputTexto = (event) => {
  //   setInputTexto(event.target.value);
  // };

  // const handleInputJob = (event) => {
  //   setInputJob(event.target.value);
  // };

  // const handleInputPais = (event) => {
  //   setInputPais(event.target.value);
  // };

  const applyToTrip = (event) => {
    event.preventDefault();

    // const body = {
    //   name: inputNome,
    //   age: inputIdade,
    //   applicationText: inputTexto,
    //   profession: inputJob,
    //   country: inputPais,
    // };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriella-lemos-franklin/trips/Ay9r90Mgk72ukenPMvWQ/apply",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((reponse) => {
        console.log(reponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={applyToTrip}>
        <p> Página application form page</p>
        <input
          name="name"
          onChange={onChange}
          value={form.name}
          placeholder="Digite seu nome"
          required
          pattern="^.{3,}$"
          title="no mínimo 3 letras"
        ></input>
        <input
          name="age"
          onChange={onChange}
          value={form.age}
          placeholder="Idade"
          required
          pattern="^(1[89]|[2-9]\d)$"
          title="maior do que 18"
        ></input>
        <input
          name="applicationText"
          onChange={onChange}
          value={form.applicationText}
          placeholder="Texto de Candidatura "
          required
          pattern="^.{3,}$"
          title="no mínimo 30 caracteres"
        ></input>
        <input
          name="profession"
          onChange={onChange}
          value={form.profession}
          placeholder="Profissão"
          required
          pattern="^.{10,}$"
          title="Mínimo de 10 caracteres"
        ></input>
        <input
          name="country"
          onChange={onChange}
          value={form.country}
          placeholder="Digite um país"
          required
        ></input>
        <button onClick={() => goToListTrips(navigate)}>voltar</button>
        <button>enviar</button>
      </form>
    </>
  );
};
