import { GenerateGenres } from "../Genres/GenerateGenres";
import { ItemLink, Item, Title, MetaWrapper, Image } from "./CardFilm.styled";
import PropTypes from "prop-types";

const CardFilm = ({ itemData }) => {
  const { poster_path, title, genre_ids } = itemData;
  return (
    <>
      <Item>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`
          }
          alt=""
        />
        <MetaWrapper>
          <Title>{title}</Title>
          <GenerateGenres genresId={genre_ids} />
        </MetaWrapper>
      </Item>
    </>
  );
};

export default CardFilm;

CardFilm.propTypes = {
  itemData: PropTypes.object.isRequired,
};
