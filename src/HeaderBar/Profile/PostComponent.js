import { ListGroup } from "react-bootstrap";

import {
  PostContainer,
  PostImage,
  StatsContainer,
  NormalButton,
  EndButton,
  TitleText,
  RightArrow,
  DescriptionText,
  HorizontalContainer,
} from "./ProfileModal.Components";

const PostComponent = (props) => {
  const { views, messages, title } = props;

  return (
    <ListGroup.Item style={{ borderRadius: "4px", paddingRight: "0px" }}>
      <PostContainer>
        <PostImage height="150" width="150" src="/cat_placeholder900x900.jpg" />
        <StatsContainer>
          <TitleText>{title}</TitleText>
          <HorizontalContainer>
            <DescriptionText>Wyświetlenia: {views}</DescriptionText>
            <DescriptionText>Wiadomości: {messages}</DescriptionText>
          </HorizontalContainer>
          <HorizontalContainer>
            <NormalButton>Odśwież</NormalButton>
            <NormalButton>Udostępnij</NormalButton>
            <EndButton variant="outline-danger">Zakończ</EndButton>
          </HorizontalContainer>
        </StatsContainer>
        <RightArrow />
      </PostContainer>
    </ListGroup.Item>
  );
};

export default PostComponent;
