import { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import * as FilmsAPI from "../../services/fecthMovies";
import FilmDetailsCard from "./FilmDetailsCard";
import { ButtonGoBackContainer, ButtonGoBack } from "./MovieDetailsPage.styled";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const MovieDetailsPage = () => {
  const { filmId } = useParams();
  const [film, setFilm] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    FilmsAPI.fetchFilmInfo(filmId)
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
  }, [filmId]);

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <ButtonGoBackContainer>
        <ButtonGoBack type="button" onClick={onGoBack}>
          Go back
        </ButtonGoBack>
      </ButtonGoBackContainer>
      {film && <FilmDetailsCard data={film} />}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
