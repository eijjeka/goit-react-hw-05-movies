import { Route, Routes } from "react-router-dom";
import {
  ContainerFilmDetails,
  FilmContainer,
  Reviews,
  Cast,
  AdditionalInfo,
  Title,
  PreTitle,
  ContainerMeta,
  ImagePoster,
} from "./FilmDetailsCard.styled";
import TableInformationFilm from "../TableInformationFilm";
import PropTypes from "prop-types";

const FilmDetailsCard = ({ data }) => {
  const { title, tagline, poster_path } = data;
  return (
    <ContainerFilmDetails>
      <FilmContainer>
        <ImagePoster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
        />

        <ContainerMeta>
          <Title>{title}</Title>
          <PreTitle>{tagline}</PreTitle>
          <TableInformationFilm data={data} />
        </ContainerMeta>
      </FilmContainer>
      <AdditionalInfo>
        <Cast to={"cast"}>Cast</Cast>
        <Reviews to={"reviews"}>Reviews</Reviews>
      </AdditionalInfo>
    </ContainerFilmDetails>
  );
};

export default FilmDetailsCard;

FilmDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
