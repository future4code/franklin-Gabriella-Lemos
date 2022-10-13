import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, LANGUAGE } from "../../constants/url";
import Buttons from "../buttons/Buttons";
import { data } from "./data";
import { ContainerFilter } from "./styled";

const Filter = () => {
  const [genre, setGenre] = useState([]);
  const getGenre = () => {
    axios
      .get(
        `${BASE_URL}/genre/movie/list?api_key=d346bc3d533eb069d9b609364f534909${LANGUAGE}`
      )
      .then((response) => {
        setGenre(response.data.genres);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  // const seachMovieByGenre = () => {
  //   if (genre[0].id === idMovie)
  // };

  useEffect(() => {
    getGenre();
  });

  return (
    <>
      <p>FILTRE POR:</p>

      <ContainerFilter>
        {/* <Buttons texto="Ação" onClick={seachMovieByGenre()} />
        <Buttons texto="Aventura" onClick={seachMovieByGenre()} />
        <Buttons texto="Animação" onClick={seachMovieByGenre()} />
        <Buttons texto="Comédia" onClick={seachMovieByGenre()} />
        <Buttons texto="Crime" onClick={seachMovieByGenre()} />
        <Buttons texto="Documentário" onClick={seachMovieByGenre()} />
        <Buttons texto="Drama" onClick={seachMovieByGenre()} />
        <Buttons texto="Família" onClick={seachMovieByGenre()} />
        <Buttons texto="Fantasia" onClick={seachMovieByGenre()} />
        <Buttons texto="História" onClick={seachMovieByGenre()} />
        <Buttons texto="Terror" onClick={seachMovieByGenre()} />
        <Buttons texto="Música" onClick={seachMovieByGenre()} />
        <Buttons texto="Mistério" onClick={seachMovieByGenre()} />
        <Buttons texto="Romance" onClick={seachMovieByGenre()} />
        <Buttons texto="Ficção científica" onClick={seachMovieByGenre()} />
        <Buttons texto="Cinema TV" onClick={seachMovieByGenre()} />
        <Buttons texto="Thiller" onClick={seachMovieByGenre()} />
        <Buttons texto="Guerra" onClick={seachMovieByGenre()} />
        <Buttons texto="Faroeste" onClick={seachMovieByGenre()} /> */}
        {/* {data.search.map((nome, index) => {
          return (
            <React.Fragment key={index}>
              <Buttons texto={nome.description} />
            </React.Fragment>
          );
        })} */}
      </ContainerFilter>
    </>
  );
};

export default Filter;
