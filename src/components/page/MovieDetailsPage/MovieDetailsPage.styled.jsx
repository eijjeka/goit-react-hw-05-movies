import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonGoBackContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonGoBack = styled(Link)`
  padding: 5px 10px;
  border: none;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ff6b01;
  }
`;
