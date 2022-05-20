import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 34px;
    padding-right: 34px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 115px;
    padding-right: 115px;
    width: 1280px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
