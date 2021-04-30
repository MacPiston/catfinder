import React, { useContext, useState } from 'react';
import {
  MiniatureImage,
  InfoButton,
  PostContainer,
  DescriptionLine,
  DescriptionBold,
  Description,
} from './PostComponent.Components';
import PostInfoModal from './PostInfoModal';
import PostContext from '../PostContext';

const PostComponent = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const { name, date, location } = useContext(PostContext);
  return (
    <PostContainer>
      <MiniatureImage
        className="miniatureImage"
        src="/cat_placeholder900x900.jpg"
        onClick={() => setInfoVisible(true)}
        thumbnail
      />

      <DescriptionLine>
        <Description>Imię: </Description>
        <DescriptionBold>{name}</DescriptionBold>
      </DescriptionLine>
      <DescriptionLine>
        <Description>Lokalizacja: </Description>
        <DescriptionBold>{location}</DescriptionBold>
      </DescriptionLine>
      <DescriptionLine>
        <Description>Data zaginięcia: </Description>
        <DescriptionBold>{date}</DescriptionBold>
      </DescriptionLine>

      {/* <InfoButton
        className="infoButton"
        variant="outline-primary"
        onClick={() => setInfoVisible(true)}
      >
        Informacje
      </InfoButton> */}

      <PostInfoModal
        modalVisible={infoVisible}
        onHide={() => setInfoVisible(false)}
      />
    </PostContainer>
  );
};

export default PostComponent;
