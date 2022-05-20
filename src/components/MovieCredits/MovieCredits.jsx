import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as FetchAPI from "../../services/fecthMovies";
import styled from "styled-components";

const MovieCredits = () => {
  const params = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    FetchAPI.fetchMovieCredits(params.filmId).then(setActors);
  }, [params.filmId]);

  return (
    <>
      {actors && (
        <List>
          {actors.map((el) => (
            <Item key={el.id}>
              <Wrapper>
                <Image
                  src={
                    el.poster_path == null
                      ? `https://image.tmdb.org/t/p/original/${el.profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png`
                  }
                  alt="Photo Actors"
                />
                <ContainerTitle>
                  <TitleActors>{el.name}</TitleActors>
                  <PreTitleActors>Character: {el.character}</PreTitleActors>
                </ContainerTitle>
              </Wrapper>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

const ContainerTitle = styled.div`
  text-align: center;
`;

const PreTitleActors = styled.p`
  font-size: 16px;
  color: #ff6b01;
`;

const TitleActors = styled.h2`
  font-size: 20px;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Item = styled.li`
  border-radius: 10px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  color: #fff;
  background-color: #000;
`;

const List = styled.ul`
  padding: 10px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default MovieCredits;
