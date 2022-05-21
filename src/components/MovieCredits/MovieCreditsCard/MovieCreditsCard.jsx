import {
  ContainerTitle,
  PreTitleActors,
  TitleActors,
  Image,
  List,
  Item,
  Wrapper,
} from "./MovieCreditsCard.styled";
import PropTypes from "prop-types";

const MovieCreditsCard = ({ data }) => {
  return (
    <List>
      {data.map((el) => (
        <Item key={el.id}>
          <Wrapper>
            <Image
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/original/${el.profile_path}`
                  : `https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`
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
  );
};

export default MovieCreditsCard;

MovieCreditsCard.propTypes = {
  data: PropTypes.array.isRequired,
};
