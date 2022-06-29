import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToForm } from "../routes/coordinator";

export const ListTripsPage = () => {
  const [listaViagem, setListaViagem] = useState([]);

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
  console.log(listaViagem);

  const novaLista = listaViagem.map((lista) => {
    return <p>{lista.name}</p>;
  });

  const navigate = useNavigate();

  useEffect(() => {
    carregarLista();
  }, []);

  return (
    <>
      <p> Página List Trips Page</p>
      {novaLista}
      <button onClick={() => goToForm(navigate)}>cadastro em viagem</button>
    </>
  );
};
