import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToTripDetails } from "../routes/coordinator";
import { goToCreateTrips } from "../routes/coordinator";
import { backToHomePage } from "../routes/coordinator";

export const AdminHomePage = () => {
  const [listagensViagens, setListagensViagens] = useState([]);

  const viagem = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriella-lemos-franklin/trips`
      )
      .then((response) => {
        setListagensViagens(response.data.trips);

        console.log(response.data.trips);
      })
      .catch((error) => console.log(error));
  };
  const novaViagens = listagensViagens.map((listagem) => {
    return <p>{listagem.name}</p>;
  });
  const navigate = useNavigate();

  useEffect(() => {
    viagem();
  }, []);

  return (
    <>
      <p> Página adminitrador home page</p>
      <button onClick={() => backToHomePage(navigate)}>voltar</button>
      <button onClick={() => goToTripDetails(navigate)}>
        detalhe da viagem
      </button>
      <button onClick={() => goToCreateTrips(navigate)}>Criar viagem</button>
      <p>{novaViagens}</p>
    </>
  );
};
