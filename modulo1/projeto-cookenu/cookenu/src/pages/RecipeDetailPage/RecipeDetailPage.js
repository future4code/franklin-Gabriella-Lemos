import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";

const RecipeDetailPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  return (
    <>
      <h2> Detalhes da receita </h2>
      {/* <button onClick={() => backToLists(navigate)}>voltar</button> */}
    </>
  );
};

export default RecipeDetailPage;
