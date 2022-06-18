import { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import * as FilmsAPI from "../../../services/fecthMovies";
import FilmDetailsCard from "./FilmDetailsCard";
import { ButtonGoBackContainer, ButtonGoBack } from "./MovieDetailsPage.styled";
import { useLocation } from "react-router-dom";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState();
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(
    location?.state?.from ?? "/"
  );

  useEffect(() => {
    FilmsAPI.fetchFilmInfo(id)
      .then((data) => {
        Loading.circle({
          svgColor: "#ff6b01",
          cssAnimationDuration: 800,
        });
        setFilm(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, [id]);

  return (
    <>
      <ButtonGoBackContainer>
        <ButtonGoBack to={prevLocation}>Go back</ButtonGoBack>
      </ButtonGoBackContainer>
      {film && <FilmDetailsCard data={film} />}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
