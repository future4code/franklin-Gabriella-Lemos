import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BASE_URL, IMAGE_URL, LANGUAGE } from "../../constants/url";

const DetailsPage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<any>(null);

  const getDetailMovie = () => {
    axios
      .get(
        `${BASE_URL}/movie/${id}?api_key=d346bc3d533eb069d9b609364f534909${LANGUAGE}`
      )
      .then((response) => {
        setMovieDetail(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDetailMovie();
  });

  return (
    <>
      <h1>Detais Page</h1>
      {movieDetail && (
        <>
          <p>{movieDetail.title}</p>
          <p>{movieDetail.release_date}</p>
          <p>{movieDetail.vote_average}</p>
          <img
            src={`${IMAGE_URL}${movieDetail.poster_path}`}
            alt={`poster ${movieDetail.title}`}
          />
          <p>{movieDetail.title}</p>
          <p>{movieDetail.overview}</p>
        </>
      )}
    </>
  );
};

export default DetailsPage;
