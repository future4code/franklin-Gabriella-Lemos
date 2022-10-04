import React from "react";
import Buttons from "../buttons/Buttons";
import { data } from "./data";
import { ContainerFilter } from "./styled";

const Filter = () => {
  return (
    <>
      <p>FILTRE POR:</p>
      <ContainerFilter>
        {data.search.map((nome, index) => {
          return (
            <React.Fragment key={index}>
              <Buttons texto={nome.description} />
            </React.Fragment>
          );
        })}
      </ContainerFilter>
    </>
  );
};

export default Filter;
