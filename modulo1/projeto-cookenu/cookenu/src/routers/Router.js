import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage";
import Create from "../pages/Create";
import Details from "../pages/Details";
import Lists from "../pages/Lists";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="create" element={<Create />} />
          <Route path="details" element={<Details />} />
          <Route path="lists" element={<Lists />} />
          <Route path="cadastro" element={<CadastroPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
