import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as FilmsAPI from "../../services/fecthMovies";
import FilmList from "../FilmList";
import Form from "./Form/Form";
import styled from "styled-components";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") ?? "");
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    if (query) {
      setSearchParams(`query=${query}`);
      FilmsAPI.fetchSearchFilmByName(query).then((data) => {
        setFilms(data);
      });
    }
  }, [query, setSearchParams]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value.toLowerCase().trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue === "") {
      console.error("🦄 Please enter the name!");
      return;
    }
    setQuery(searchValue);
  };

  return (
    <>
      <ContainerForm>
        <Form
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          query={query}
        />
      </ContainerForm>
      <FilmList data={films} />
    </>
  );
};

const ContainerForm = styled.div`
  margin-top: 20px;
`;

export default MoviesPage;
