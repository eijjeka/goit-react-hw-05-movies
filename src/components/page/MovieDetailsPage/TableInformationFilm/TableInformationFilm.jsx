import { Table, Tr, Td, TitleCategory } from "./TableInformationFilm.styled";
import PropTypes from "prop-types";

const TableInformationFilm = ({ data }) => {
  const {
    vote_average,
    release_date,
    production_countries,
    runtime,
    overview,
    genres,
  } = data;

  return (
    <Table>
      <tbody>
        <Tr>
          <Td>
            <TitleCategory>Ratings:</TitleCategory>
          </Td>
          <Td>
            <span>{vote_average}</span>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <TitleCategory>Release date:</TitleCategory>
          </Td>
          <Td>
            <span>{release_date}</span>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <TitleCategory>Country:</TitleCategory>
          </Td>
          <Td>
            <span>{production_countries.map((el) => el.name)}</span>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <TitleCategory>Genres:</TitleCategory>
          </Td>
          <Td>
            <span>{genres.map((el) => el.name).join(" ")}</span>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <TitleCategory>Time:</TitleCategory>
          </Td>
          <Td>
            <span>{runtime} min.</span>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <TitleCategory>Overview:</TitleCategory>
          </Td>
          <Td>
            <span>{overview} min.</span>
          </Td>
        </Tr>
      </tbody>
    </Table>
  );
};

export default TableInformationFilm;

TableInformationFilm.propTypes = {
  data: PropTypes.object.isRequired,
};
