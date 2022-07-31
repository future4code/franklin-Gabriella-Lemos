import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddRecipesForm from "./AddRecipesForm";
import { RecipeContainer, ScreenContainer } from "./styled";

const AddRecipesPage = () => {
  useProtectedPage();
  // const navigate = useNavigate();

  return (
    <ScreenContainer>
      <RecipeContainer>
        <AddRecipesForm />
        <Typography
          gutterBottom
          variant={"h4"}
          align={"center"}
          color={"textPrimary"}
        >
          Adicionar Nova Receita
        </Typography>
        {/* <button onClick={() => backToLists(navigate)}> voltar </button> */}
      </RecipeContainer>
    </ScreenContainer>
  );
};

export default AddRecipesPage;
