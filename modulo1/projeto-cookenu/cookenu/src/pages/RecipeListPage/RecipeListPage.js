import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { AddRecipeButton, RecipeListContainer } from "./styled";
import AddIcon from "@mui/icons-material/Add";
import { goToAddRecipesPage } from "../../routers/coordinator";

const RecipeListPage = () => {
  const navigate = useNavigate();

  useProtectedPage();

  const onClickCard = () => {};

  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`);

  const recipeCards = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipeid}
        title={recipe.title}
        image={recipe.image}
        onClick={() => null}
      />
    );
  });

  console.log(recipes);

  // const navigate = useNavigate();
  return (
    <>
      <RecipeListContainer>{recipeCards}</RecipeListContainer>
      <AddRecipeButton
        color="primary"
        onClick={() => goToAddRecipesPage(navigate)}
      >
        {" "}
        <AddIcon />
      </AddRecipeButton>
    </>
  );
};

export default RecipeListPage;
