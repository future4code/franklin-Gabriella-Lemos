import React from "react";
import { useNavigate } from "react-router-dom";

export const ListTripsPage = () => {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/trips/application");
  };
  return (
    <>
      <p> Página List Trips Page</p>
      <button onClick={goToForm}>cadastro em viagem</button>
    </>
  );
};
