import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routers/coordinator";

const useProtectedPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("Não está logado!");
      goToLoginPage(navigate);
    }
  }, [navigate]);
};
export default useProtectedPage;