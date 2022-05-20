import { useState } from "react";
import { useParams } from "react-router-dom";
import * as FetchAPI from "../../services/fecthMovies";
import styled from "styled-components";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState();

  FetchAPI.fetchMovieReviews(params.filmId).then(setReviews);

  return (
    <>
      {reviews &&
        reviews.map((el) => (
          <ContainerReviews key={el.id}>
            <PanelInfo>
              <ConteinerAvatar>
                <ImageAvatar
                  src={
                    el.author_details?.avatar_path?.includes("https:")
                      ? el.author_details.avatar_path.slice(1)
                      : `https://www.gravatar.com/avatar${el.author_details.avatar_path}`
                  }
                  alt=""
                />
                <AvatarName>{el.author}</AvatarName>
              </ConteinerAvatar>
              <span>{el.created_at}</span>
            </PanelInfo>
            <ReviewsData>
              <p>{el.content}</p>
            </ReviewsData>
          </ContainerReviews>
        ))}
    </>
  );
};

const ConteinerAvatar = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarName = styled.span`
  margin-left: 10px;
`;

const ImageAvatar = styled.img`
  width: 30px;
`;

const ReviewsData = styled.div`
  background-color: #fff;
  padding: 20px;
`;

const PanelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ebeaea;
`;

const ContainerReviews = styled.div`
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  line-height: 1.5;
`;

export default MovieReviews;
