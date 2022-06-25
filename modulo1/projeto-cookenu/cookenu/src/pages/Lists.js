import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goToCreate } from "../routers/coordinator";

const Lists = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2> Lista de receitas</h2>
      <button onClick={() => goToDetails(navigate)}>Detalhar receita</button>
      <button onClick={() => goToCreate(navigate)}>Adicionar receita</button>
    </>
  );
};

export default Lists;
