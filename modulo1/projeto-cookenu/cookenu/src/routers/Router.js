import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({ rightButtonText, setRightButtonText }) => {
  return (
    <>
      {/* <BrowserRouter>
        <Header /> */}
      <Routes>
        <Route
          path="login"
          element={
            <LoginPage
              rightButtonText={rightButtonText}
              setRightButtonText={setRightButtonText}
            />
          }
        />
        <Route
          path="cadastro"
          element={<SignUpPage setRightButtonText={setRightButtonText} />}
        />
        <Route index element={<RecipeListPage />} />
        <Route path="adicionar-receita" element={<AddRecipesPage />} />
        <Route path="detalhe/:id" element={<RecipeDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default Router;
