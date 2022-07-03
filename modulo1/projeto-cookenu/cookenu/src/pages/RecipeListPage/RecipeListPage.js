import React from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import useProtectedPage from "../../hooks/useProtectedPage";

const RecipeListPage = () => {
  useProtectedPage();
  // const navigate = useNavigate();
  return (
    <>
      <h2> Lista de receitas</h2>
      <Button color="primary" variant="contained">
        neutral
      </Button>
      {/* <button onClick={() => goToDetails(navigate)}>Detalhar receita</button>
      <button onClick={() => goToCreate(navigate)}>Adicionar receita</button> */}
    </>
  );
};

export default RecipeListPage;
