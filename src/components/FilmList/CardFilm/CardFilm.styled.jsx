import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Item = styled.li`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.75);
  background-color: RGBA(0, 0, 0, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;
export const Title = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;
export const MetaWrapper = styled.div`
  padding: 10px;
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
`;
