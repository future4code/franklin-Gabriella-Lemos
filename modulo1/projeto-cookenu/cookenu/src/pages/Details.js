import React from "react";
import { useNavigate } from "react-router-dom";
import { backToLists } from "../routers/coordinator";

const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2> Detalhes da receita </h2>
      <button onClick={() => backToLists(navigate)}>voltar</button>
    </>
  );
};

export default Details;
