import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipeListPage } from "../routers/coordinator";

export const login = (
  body,
  clear,
  navigate,
  setRightButtonText,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      clear();
      setIsLoading(false);
      goToRecipeListPage(navigate);
      console.log(response.data);
      setRightButtonText("Logout");
    })
    .catch((error) => {
      setIsLoading(false);
      alert(error.response.data.message);
    });
};

export const signUp = (
  body,
  clear,
  navigate,
  setRightButtonText,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      clear();
      setIsLoading(false);
      goToRecipeListPage(navigate);
      setRightButtonText("Logout");
      console.log(response.data);
    })
    .catch((error) => {
      setIsLoading(true);
      alert(error.response.data.message);
    });
};
