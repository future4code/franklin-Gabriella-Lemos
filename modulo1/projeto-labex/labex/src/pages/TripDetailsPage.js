import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

export const TripDetailsPage = () => {
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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.code);
      });
  });
  return <p> Página Trip Details Page</p>;
};
