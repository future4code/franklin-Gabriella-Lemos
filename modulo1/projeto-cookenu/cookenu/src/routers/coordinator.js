export const goToRecipeListPage = (navigate) => {
  navigate("/");
};
export const goToSignUpPage = (navigate) => {
  navigate("/cadastro");
};
export const goToRecipeDetailPage = (navigate, id) => {
  navigate(`/detalhe/${id}`);
};
export const goToAddRecipesPage = (navigate) => {
  navigate("/adicionar-receita");
};

export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const backToLists = (navigate) => {
  navigate(-1);
};
