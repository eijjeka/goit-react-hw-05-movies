import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCreditsCard from "./MovieCreditsCard";
import * as FetchAPI from "../../services/fecthMovies";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const MovieCredits = () => {
  const params = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    FetchAPI.fetchMovieCredits(params.id)
      .then((data) => {
        Loading.circle({
          svgColor: "#ff6b01",
        });
        setActors(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, [params.id]);

  return <>{actors && <MovieCreditsCard data={actors} />}</>;
};

export default MovieCredits;
