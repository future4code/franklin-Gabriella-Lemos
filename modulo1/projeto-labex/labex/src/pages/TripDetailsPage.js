import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

export const TripDetailsPage = () => {
  const [listDetails, setListDetais] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("Não está logado!");
      goToLogin(navigate);
    }
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:gabriella-lemos-franklin/trip/Ay9r90Mgk72ukenPMvWQ`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setListDetais(response.data.trip);
        console.log(response.data.trip);
      })
      .catch((error) => {
        console.log(error.code);
      });
  });
  return (
    <>
      <p> Página Trip Details Page</p>
      <p>{listDetails.id}</p>
      <p>{listDetails.candidates}</p>
    </>
  );
};
