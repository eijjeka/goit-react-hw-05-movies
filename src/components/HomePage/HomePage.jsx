import { useState, useEffect } from "react";
import FilmList from "../FilmList";
import * as FilmsAPI from "../../services/fecthMovies";

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    FilmsAPI.fetchPopularFilms().then(setFilms);
  }, []);

  return <FilmList data={films} />;
};

export default HomePage;
