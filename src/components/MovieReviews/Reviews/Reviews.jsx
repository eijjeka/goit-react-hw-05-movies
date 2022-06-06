import {
  ConteinerAvatar,
  AvatarName,
  ImageAvatar,
  ReviewsData,
  PanelInfo,
  ContainerReviews,
} from "./Reviews.styled";

const Reviews = ({ data }) => {
  const { author_details, author, created_at, content, avatarPath } = data;

  return (
    <ContainerReviews>
      <PanelInfo>
        <ConteinerAvatar>
          <ImageAvatar
            src={
              data.author_details?.avatar_path?.includes("https:")
                ? author_details.avatar_path.slice(1)
                : `https://www.gravatar.com/avatar${avatarPath}`
            }
            alt=""
          />
          <AvatarName>{author}</AvatarName>
        </ConteinerAvatar>
        <span>{created_at}</span>
      </PanelInfo>
      <ReviewsData>
        <p>{content}</p>
      </ReviewsData>
    </ContainerReviews>
  );
};

export default Reviews;
