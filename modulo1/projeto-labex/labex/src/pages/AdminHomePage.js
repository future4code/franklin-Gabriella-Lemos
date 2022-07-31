import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToTripDetails } from "../routes/coordinator";
import { goToCreateTrips } from "../routes/coordinator";
import { backToHomePage } from "../routes/coordinator";

export const AdminHomePage = () => {
  const token = localStorage.getItem("token");
  const pathParams = useParams();

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

  const delTrip = (id) => {
    axios
      .del(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriella-lemos-franklin/trips/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      )
      .then((response) => {
        setListagensViagens(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const novaViagens = listagensViagens.map((listagem) => {
    return (
      <>
        <ul>
          <li key={listagem.id}>
            <button onClick={() => goToTripDetails(navigate, listagem.id)}>
              {listagem.name}
            </button>
            <button onClick={delTrip}>delete</button>
          </li>
        </ul>
      </>
    );
  });
  console.log(pathParams);
  const navigate = useNavigate();

  useEffect(() => {
    viagem();
  }, []);

  return (
    <>
      <p> Página adminitrador home page</p>
      <button onClick={() => backToHomePage(navigate)}>voltar</button>

      <button onClick={() => goToCreateTrips(navigate)}>Criar viagem</button>
      <p>{novaViagens}</p>
    </>
  );
};
