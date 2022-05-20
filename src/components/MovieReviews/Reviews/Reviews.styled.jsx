import styled from "styled-components";

export const List = styled.ul``;

export const ContainerReviews = styled.li`
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  line-height: 1.5;
  @media screen and (max-width: 480px) {
    max-width: 300px;
  }
`;

export const PanelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ebeaea;
`;

export const ConteinerAvatar = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageAvatar = styled.img`
  width: 30px;
`;

export const AvatarName = styled.span`
  margin-left: 10px;
`;

export const ReviewsData = styled.div`
  background-color: #fff;
  padding: 20px;
`;
