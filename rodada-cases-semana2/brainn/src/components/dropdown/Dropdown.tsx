import React from "react";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";

type item = {
  id: string;
  nome: string;
};

const Dropdown = ({ onChange = () => {} }: any) => {
  const loterias = useRequestData([], BASE_URL);

  return (
    <select id="id" name="id" onChange={onChange}>
      {loterias &&
        loterias.map((item: item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.nome}
            </option>
          );
        })}
    </select>
  );
};

export default Dropdown;
