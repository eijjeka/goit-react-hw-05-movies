import CardFilm from "./CardFilm";
import { List } from "./FilmList.styled";
import PropTypes from "prop-types";

const FilmList = ({ data }) => {
  return (
    <List>
      {data.map((el) => (
        <CardFilm key={el.id} itemData={el} />
      ))}
    </List>
  );
};

export default FilmList;

FilmList.propTypes = {
  data: PropTypes.array.isRequired,
};
