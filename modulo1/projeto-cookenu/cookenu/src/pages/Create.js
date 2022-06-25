import React from "react";
import { useNavigate } from "react-router-dom";
import { backToLists } from "../routers/coordinator";

const Create = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Criação de receita</h2>
      <button onClick={() => backToLists(navigate)}> voltar </button>
    </>
  );
};

export default Create;
