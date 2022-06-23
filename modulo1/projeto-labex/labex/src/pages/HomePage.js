import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const pathParams = useParams();

  console.log(pathParams);

  const goToListTrips = () => {
    navigate("/trips/list");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <p> Página home page pura</p>
      <button onClick={goToListTrips}>Lista de Viagens</button>
      <button onClick={goToLogin}>Área Adm</button>
    </>
  );
};
