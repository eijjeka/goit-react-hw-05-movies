import CardFilm from "../CardFilm";
import { List } from "./FilmList.styled";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { ItemLink } from "../CardFilm/CardFilm.styled";

const FilmList = ({ data }) => {
  const location = useLocation();

  return (
    <List>
      {data.map((el) => (
        <ItemLink
          to={`/movies/${el.id}`}
          state={{ from: location }}
          key={el.id}
        >
          <CardFilm itemData={el} />
        </ItemLink>
      ))}
    </List>
  );
};

export default FilmList;

FilmList.propTypes = {
  data: PropTypes.array.isRequired,
};
