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
import { useLocation } from "react-router-dom";
import TableInformationFilm from "../TableInformationFilm";
import PropTypes from "prop-types";

const FilmDetailsCard = ({ data }) => {
  const { title, tagline, poster_path } = data;
  const { state } = useLocation();
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
        <Cast to={"cast"} state={state}>
          Cast
        </Cast>
        <Reviews to={"reviews"} state={state}>
          Reviews
        </Reviews>
      </AdditionalInfo>
    </ContainerFilmDetails>
  );
};

export default FilmDetailsCard;

FilmDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
