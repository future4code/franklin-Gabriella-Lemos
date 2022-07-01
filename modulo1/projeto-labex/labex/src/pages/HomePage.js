import { useNavigate, useParams } from "react-router-dom";
import { goToListTrips } from "../routes/coordinator";
import { goToLogin } from "../routes/coordinator";

export const HomePage = () => {
  const navigate = useNavigate();
  const pathParams = useParams();

  console.log(pathParams);

  return (
    <>
      <p> Página home page pura</p>
      <button onClick={() => goToListTrips(navigate)}>Lista de Viagens</button>
      <button onClick={() => goToLogin(navigate)}>Área Adm</button>
    </>
  );
};
