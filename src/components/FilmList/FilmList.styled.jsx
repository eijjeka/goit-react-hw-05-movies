import styled from "styled-components";

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  list-style: none;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;
