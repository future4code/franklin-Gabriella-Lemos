import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

export const TripDetailsPage = () => {
  const pathParams = useParams();
  const id = pathParams.id;

  const [listDetails, setListDetails] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("Não está logado!");
      goToLogin(navigate);
    }
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriella-lemos-franklin/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setListDetails(response.data.trip);
        console.log(response.data.trip);
      })
      .catch((error) => {
        console.log(error.code);
      });
  }, [id, navigate]);

  // const listaCandidatos = listDetails.candidates.map((candidatos) => {
  //   return (
  //     <div>
  //       <p>{candidatos.name}</p>
  //       <p>{candidatos.profession}</p>
  //       <p>{candidatos.age}</p>
  //       <p>{candidatos.country}</p>
  //       <p>{candidatos.applicationText}</p>
  //     </div>
  //   );
  // });

  // console.log(listaCandidatos);

  // const listaAprovados = listDetails.candidates.map((aprovados) => {
  //   return (
  //     <div>
  //       <p>{aprovados.nome}</p>
  //       <p>{aprovados.profession}</p>
  //       <p>{aprovados.age}</p>
  //       <p>{aprovados.country}</p>
  //       <p>{.applicationText}</p>
  //     </div>
  //   );
  // });

  return (
    <>
      <p> Página Trip Details Page</p>
      <p>{listDetails.id}</p>
      <p>{listDetails.name}</p>
      <p>{listDetails.description}</p>
      <p>{listDetails.date}</p>
      <p>{listDetails.planet}</p>
      <p>{listDetails.durationInDays}</p>

      <h3>Lista de candidatos</h3>

      {/* <p>{listaCandidatos.name}</p> */}
    </>
  );
};
