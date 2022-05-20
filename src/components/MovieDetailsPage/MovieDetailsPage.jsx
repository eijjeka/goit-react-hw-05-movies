import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import * as FilmsAPI from "../../services/fecthMovies";
import styled from "styled-components";

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
      <ButtonGoBack>
        <button type="button" onClick={onGoBack}>
          Go back
        </button>
      </ButtonGoBack>
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
              <Table>
                <tbody>
                  <tr>
                    <Td>
                      <TitleCategory>Ratings:</TitleCategory>
                    </Td>
                    <Td>
                      <span>{film.vote_average}</span>
                    </Td>
                  </tr>
                  <tr>
                    <Td>
                      <TitleCategory>Release date:</TitleCategory>
                    </Td>
                    <Td>
                      <span>{film.release_date}</span>
                    </Td>
                  </tr>
                  <tr>
                    <Td>
                      <TitleCategory>Country:</TitleCategory>
                    </Td>
                    <Td>
                      <span>
                        {film.production_countries.map((el) => el.name)}
                      </span>
                    </Td>
                  </tr>
                  <tr>
                    <Td>
                      <TitleCategory>Genres:</TitleCategory>
                    </Td>
                    <Td>
                      <span>{film.genres.map((el) => el.name).join(" ")}</span>
                    </Td>
                  </tr>
                  <tr>
                    <Td>
                      <TitleCategory>Time:</TitleCategory>
                    </Td>
                    <Td>
                      <span>{film.runtime} min.</span>
                    </Td>
                  </tr>
                  <tr>
                    <Td>
                      <TitleCategory>Overview:</TitleCategory>
                    </Td>
                    <Td>
                      <span>{film.overview} min.</span>
                    </Td>
                  </tr>
                </tbody>
              </Table>
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

const ContainerFilmDetails = styled.div`
  margin-top: 30px;
  padding: 10px;
  border-radius: 30px;
  border: 0.5px solid #fff;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const FilmContainer = styled.div`
  display: flex;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Reviews = styled(Link)`
  padding: 10px 50px;
  background-color: #fff;
  border-radius: 20px;
  margin-right: 30px;
  text-decoration: none;
  color: black;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ff6b01;
  }
`;

const Cast = styled(Link)`
  padding: 10px 50px;
  background-color: #fff;
  border-radius: 20px;
  margin-right: 30px;
  text-decoration: none;
  color: black;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ff6b01;
  }
`;

const AdditionalInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const ButtonGoBack = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Table = styled.table`
  border-spacing: 0px;
  border-collapse: collapse;
`;

const Td = styled.td`
  vertical-align: sub;
`;

const TitleCategory = styled.h2`
  width: 200px;
  margin-top: 5px;
  font-size: 20px;
`;

const Title = styled.h1``;

const PreTitle = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  color: #818181;
`;

const ContainerMeta = styled.div`
  margin-left: 20px;
`;

const ImagePoster = styled.img`
  border: 3px solid #fff;
  width: 320px;
  height: 460px;
`;

export default MovieDetailsPage;
