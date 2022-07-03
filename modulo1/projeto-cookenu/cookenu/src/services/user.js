import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipeListPage } from "../routers/coordinator";

export const login = (body, navigate, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToRecipeListPage(navigate);
      console.log(response.data);
      setRightButtonText("Logout");
    })
    .catch((error) => {
      alert(error.response.data.message);
      console.log(error);
    });
};

export const signUp = (body, navigate, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToRecipeListPage(navigate);
      setRightButtonText("Logout");
      console.log(response.data);
    })
    .catch((error) => {
      alert(error.response.data.message);
      console.log(error);
    });
};
