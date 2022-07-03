import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipeListPage } from "../routers/coordinator";

export const login = (body, navigate) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToRecipeListPage(navigate);
      console.log(response.data);
    })
    .catch((error) => {
      alert("Erro no login");
      console.log(error);
    });
};
