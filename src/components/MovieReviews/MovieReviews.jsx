import { useState } from "react";
import { useParams } from "react-router-dom";
import * as FetchAPI from "../../services/fecthMovies";
import Reviews from "./Reviews";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState();

  FetchAPI.fetchMovieReviews(params.filmId).then(setReviews);

  return (
    <>{reviews && reviews.map((el) => <Reviews key={el.id} data={el} />)}</>
  );
};

export default MovieReviews;
