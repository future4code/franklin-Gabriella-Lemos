import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { handleInputChange } from "react-select/dist/declarations/src/utils";

import Dropdown from "../../components/dropdown/Dropdown";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";

import { ConstinanerHome } from "./styled";

const Home = () => {
  const [sorteio, setSorteio] = useState<any>({});
  const [concursos, setConcursos] = useState({});
  const [concursoListId, setConscursoListId] = useState([]);

  const resultados = useRequestData([], `${BASE_URL}-concursos`);
  console.log(resultados);

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    console.log(value);
    setSorteio({ ...sorteio, [name]: value });
  };

  // const getLoteriaId = resultados.find(
  //   (res: any) => res.loteriaId === sorteio.id
  // );

  // console.log(getLoteriaId);

  const getLoteriaId =
    resultados &&
    resultados
      .map((res: any) => {
        return res.loteriaId;
      })
      .filter((id: any) => id === sorteio.id);

  console.log(`É isso ${resultados}`);

  return (
    <ConstinanerHome>
      <Dropdown onChange={handleInputChange} />
    </ConstinanerHome>
  );
};
export default Home;
