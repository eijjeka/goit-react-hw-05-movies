import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as FetchAPI from "../../services/fecthMovies";
import Reviews from "./Reviews";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    FetchAPI.fetchMovieReviews(params.filmId).then(setReviews);
  }, [params.filmId]);

  return (
    <>
      {reviews.length > 0
        ? reviews.map((el) => <Reviews key={el.id} data={el} />)
        : Notify.info("Sorry... reviews list is empty")}
    </>
  );
};

export default MovieReviews;
