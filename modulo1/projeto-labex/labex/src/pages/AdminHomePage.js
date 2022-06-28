import React from "react";
import { useNavigate } from "react-router-dom";
import { goToTripDetails } from "../routes/coordinator";
import { goToCreateTrips } from "../routes/coordinator";
import { backToHomePage } from "../routes/coordinator";

export const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <p> Página adminitrador home page</p>
      <button onClick={() => backToHomePage(navigate)}>voltar</button>
      <button onClick={() => goToTripDetails(navigate)}>
        detalhe da viagem
      </button>
      <button onClick={() => goToCreateTrips(navigate)}>Criar viagem</button>
    </>
  );
};
