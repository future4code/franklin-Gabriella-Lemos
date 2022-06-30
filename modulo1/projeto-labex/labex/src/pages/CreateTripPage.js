import axios from "axios";
// import React, { useEffect } from "react";
import useForm from "../hooks/useForm";

export const CreateTripPage = () => {
  const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  const carregarTripList = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriella-lemos-franklin/trips",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   carregarTripList();
  // }, []);
  return (
    <>
      <p> Página Create Trip Page</p>
      <form onSubmit={carregarTripList}>
        <input
          name="name"
          onChange={onChange}
          value={form.name}
          required
          pattern="^.{6,}$"
          title="no mínimo 5 letras"
          placeholder="Nome da viagem"
          // type="email"
        ></input>
        <input
          name="planet"
          onChange={onChange}
          value={form.planet}
          required
          // pattern="^.{6,}$"
          // title="no mínimo 5 letras"
          // type="email"
          placeholder="Planeta"
        ></input>
        <input
          name="date"
          onChange={onChange}
          value={form.date}
          required
          pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/\d{2}"
          title="deve ser uma data no futuro"
          placeholder="DD/MM/AAAA"
          // type="email"
        ></input>
        <input
          name="description"
          onChange={onChange}
          value={form.description}
          required
          pattern="^.{30,}$"
          title="no mínimo 30 letras"
          // type="email"
          placeholder="Descrição"
        ></input>
        <input
          name="durationInDays"
          onChange={onChange}
          value={form.durationInDays}
          required
          pattern="([5-9][0-9])"
          title="no mínimo 50 dias"
          // type="email"
          placeholder="Descrição"
        ></input>
        <button onChange={onChange}>criar</button>
      </form>
    </>
  );
};
