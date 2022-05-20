import { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import TableInformationFilm from "./TableInformationFilm";
import * as FilmsAPI from "../../services/fecthMovies";
import {
  ButtonGoBackContainer,
  ButtonGoBack,
  ContainerFilmDetails,
  FilmContainer,
  Reviews,
  Cast,
  AdditionalInfo,
  Title,
  PreTitle,
  ContainerMeta,
  ImagePoster,
} from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
  const { filmId } = useParams();
  const [film, setFilm] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    FilmsAPI.fetchFilmInfo(filmId).then(setFilm);
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
      {film && (
        <ContainerFilmDetails>
          <FilmContainer>
            <ImagePoster
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt="poster"
            />
            <ContainerMeta>
              <Title>{film.title}</Title>
              <PreTitle>{film.tagline}</PreTitle>
              <TableInformationFilm data={film} />
            </ContainerMeta>
          </FilmContainer>
          <AdditionalInfo>
            <Cast to={"cast"}>Cast</Cast>
            <Reviews to={"reviews"}>Reviews</Reviews>
          </AdditionalInfo>
        </ContainerFilmDetails>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
