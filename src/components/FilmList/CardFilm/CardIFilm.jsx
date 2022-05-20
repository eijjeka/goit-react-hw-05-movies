import { useLocation } from "react-router-dom";
import { GenerateGenres } from "./GenerateGenres";
import { ItemLink, Item, Title, MetaWrapper, Image } from "./CardFilm.styled";

const CardFilm = ({ itemData }) => {
  const location = useLocation();
  const { poster_path, title, id, genre_ids } = itemData;

  return (
    <>
      <Item>
        <ItemLink
          to={{
            pathname: `/movies/${id}`,
            state: { from: location },
          }}
        >
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
        </ItemLink>
      </Item>
    </>
  );
};

export default CardFilm;
