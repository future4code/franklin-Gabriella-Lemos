import React, { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import axios from "axios";
import { BASE_URL, LANGUAGE } from "../../constants/url";
import { movies } from "../../types/TopMovies";
import CardMovie from "../../components/cardMovie/CardMovie";
import { goToDetailsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/buttons/Buttons";

const HomePage = () => {
  const [topMovies, setTopMovies] = useState<any>([]);
  const [genre, setGenre] = useState<any>([]);
  const navigate = useNavigate();

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

  const getTopMovies = () => {
    axios
      .post(
        `${BASE_URL}/movie/top_rated?api_key=d346bc3d533eb069d9b609364f534909${LANGUAGE}`
      )
      .then((response) => {
        setTopMovies(response.data.results);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTopMovies();
    getGenre();
  }, []);

  const onClickCard = (id: string) => {
    goToDetailsPage(navigate, id);
  };

  const seachMovieByGenre = (genreId: string) => {
    console.log(genreId);
    // const searchMovies = topMovies.filter((movies: any) => {
    //   if (movies.genre_ids === genre[0].id) {
    //     console.log(searchMovies);
    //   }
    // });
  };

  return (
    <>
      <Header />

      {topMovies &&
        topMovies.map((movie: movies, index: any) => {
          return (
            <>
              <React.Fragment key={index}>
                {" "}
                <CardMovie
                  title={movie.title}
                  release_date={movie.release_date}
                  poster_path={movie.poster_path}
                  id={""}
                  onClickLearn={() => onClickCard(movie.id)}
                  learn="Leia Mais"
                  onClickShare={""}
                  share="Compartilhar"
                />{" "}
              </React.Fragment>
              {/* <Button onClick={() => onClickCard(movie.id)}>Leia mais</Button>
              <Button onClick={() => onClickCard(movie.id)}>
                Compartilhar
              </Button> */}
            </>
          );
        })}
      <Buttons texto="Ação" onClick={seachMovieByGenre(topMovies[0])} />
    </>
  );
};
export default HomePage;
