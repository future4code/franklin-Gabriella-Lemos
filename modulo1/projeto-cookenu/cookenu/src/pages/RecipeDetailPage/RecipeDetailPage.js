import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeContainer, RecipeImage, ScreenContainer } from "./styled";

const RecipeDetailPage = () => {
  useProtectedPage();
  const params = useParams;
  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0];
  console.log(recipe);

  return (
    <>
      {recipe && (
        <ScreenContainer>
          <RecipeImage src={recipe.image} />
          <RecipeContainer>{recipe && recipe.title}</RecipeContainer>
          <Typography align={"center"}>{recipe.description}</Typography>
        </ScreenContainer>
      )}
    </>
  );
};

export default RecipeDetailPage;
