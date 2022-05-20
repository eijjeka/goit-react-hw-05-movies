import styled from "styled-components";

export const Tr = styled.tr`
  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const Table = styled.table`
  border-spacing: 0px;
  border-collapse: collapse;
`;

export const Td = styled.td`
  vertical-align: sub;
`;

export const TitleCategory = styled.h2`
  width: 200px;
  margin-top: 5px;
  font-size: 20px;
  color: #ff6b01;
`;
