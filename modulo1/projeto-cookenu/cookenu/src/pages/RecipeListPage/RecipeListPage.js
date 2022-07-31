import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { AddRecipeButton, RecipeListContainer } from "./styled";
import AddIcon from "@mui/icons-material/Add";
import {
  goToAddRecipesPage,
  goToRecipeDetailPage,
} from "../../routers/coordinator";
import Loading from "../../components/Loading/Loading";

const RecipeListPage = () => {
  const navigate = useNavigate();

  useProtectedPage();

  const onClickCard = (id) => {
    goToRecipeDetailPage(navigate, id);
  };

  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`);

  const recipeCards = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    );
  });

  console.log(recipes);

  // const navigate = useNavigate();
  return (
    <>
      <RecipeListContainer>
        {recipeCards.length > 0 ? recipeCards : <Loading />}
      </RecipeListContainer>
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
