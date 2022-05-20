import styled from "styled-components";

export const ContainerTitle = styled.div`
  text-align: center;
`;

export const PreTitleActors = styled.p`
  font-size: 16px;
  color: #ff6b01;
`;

export const TitleActors = styled.h2`
  font-size: 20px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
`;

export const Item = styled.li`
  border-radius: 10px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  height: 100%;
  color: #fff;
  background-color: #000;
`;

export const List = styled.ul`
  padding: 10px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
