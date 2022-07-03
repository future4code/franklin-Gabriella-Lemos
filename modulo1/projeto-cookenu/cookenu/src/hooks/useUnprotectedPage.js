import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToRecipeListPage } from "../routers/coordinator";

const useUnprotectedPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Não está logado!");
      goToRecipeListPage(navigate);
    }
  }, [navigate]);
};
export default useUnprotectedPage;
