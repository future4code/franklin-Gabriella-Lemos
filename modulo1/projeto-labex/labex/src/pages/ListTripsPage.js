import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToForm } from "../routes/coordinator";

export const ListTripsPage = () => {
  const [listaViagem, setListaViagem] = useState("");

  const carregarLista = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriella-lemos-franklin/trips`
      )
      .then((response) => {
        setListaViagem(response.data.trips);
        console.log(response.data.trips);
      })
      .catch((error) => console.log(error));
  };

  const novaLista = listaViagem;

  const navigate = useNavigate();
  carregarLista();

  return (
    <>
      <p> Página List Trips Page</p>
      {novaLista.name}
      <button onClick={() => goToForm(navigate)}>cadastro em viagem</button>
    </>
  );
};
