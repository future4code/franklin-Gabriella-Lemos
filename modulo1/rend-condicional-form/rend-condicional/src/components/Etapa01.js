import React from "react";

const Etapa01 = () => {
  return (
    <>
      <h3> ETAPA 1 - DADOS GERAIS</h3>
      <p>Qual o seu nome?</p>
      <input></input>
      <p>Qual sua idade?</p>
      <input></input>
      <p>Qual o seu email?</p>
      <input></input>
      <p>Qual sua escolaridade?</p>
      <select>
        <option value="ensino médio incompleto">ensino médio incompleto</option>
        <option value="ensino médio completo">ensino médio completo</option>
        <option value="ensino superior incompleto">
          ensino médio incompleto
        </option>
        <option value="ensino superior completo">
          ensino superior completo
        </option>
      </select>
    </>
  );
};

export { Etapa01 };
