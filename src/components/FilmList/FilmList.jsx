import CardFilm from "./CardFilm";
import { List } from "./FilmList.styled";

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
