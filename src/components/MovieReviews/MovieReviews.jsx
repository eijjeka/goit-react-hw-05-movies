import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as FetchAPI from "../../services/fecthMovies";
import Reviews from "./Reviews";
import { List } from "./Reviews/Reviews.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    FetchAPI.fetchMovieReviews(params.id).then((data) => {
      if (data.length === 0) {
        return Notify.info("Sorry... reviews list is empty");
      }
      setReviews(data);
    });
  }, [params.filmId]);

  return (
    <>
      <List>
        {reviews.length > 0 &&
          reviews.map((el) => <Reviews key={el.id} data={el} />)}
      </List>
    </>
  );
};

export default MovieReviews;
