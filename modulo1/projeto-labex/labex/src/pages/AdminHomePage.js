import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminHomePage = () => {
  const navigate = useNavigate();

  const goToTripDetails = () => {
    navigate("/admin/trips/:id");
  };

  const goToCreatTrips = () => {
    navigate("/admin/trips/list");
  };

  return (
    <>
      <p> Página adminitrador home page</p>
      <button onClick={goToTripDetails}>detalhe da viagem</button>
      <button onClick={goToCreatTrips}>formulário adição de imagem</button>
    </>
  );
};
