import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { GenerateGenres } from "./GenerateGenres";

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
                : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png`
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

const ItemLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Item = styled.li`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.75);
  background-color: RGBA(0, 0, 0, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;
const Title = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;
const MetaWrapper = styled.div`
  padding: 10px;
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
`;
export default CardFilm;
