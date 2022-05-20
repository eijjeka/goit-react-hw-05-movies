import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as FilmsAPI from "../../services/fecthMovies";
import FilmList from "../FilmList";
import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";

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
        <form onSubmit={handleSubmit}>
          <InputContainer>
            {query ? (
              <Input
                value={query}
                placeholder="Type to search"
                type="text"
                onChange={handleInputChange}
              />
            ) : (
              <Input
                type="text"
                placeholder="Type to search"
                onChange={handleInputChange}
              />
            )}

            <ButtonSubmit type="submit">
              <IconSearch size={30} />
            </ButtonSubmit>
          </InputContainer>
        </form>
      </ContainerForm>
      <FilmList data={films} />
    </>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  padding: 4.5px;
  padding-top: 4px;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #212229;
  &:hover {
  }
`;

const Input = styled.input`
  width: 400px;
  padding: 10px;
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #212229;
  caret-color: #ff6b01;
  color: #fff;
`;

const ContainerForm = styled.div`
  margin-top: 20px;
`;

const IconSearch = styled(BsArrowRightCircle)`
  color: #fff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #ff6b01;
  }
`;

export default MoviesPage;
