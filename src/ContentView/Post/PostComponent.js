import React, { useState } from 'react';
import {
  MiniatureImage,
  InfoButton,
  PostContainer,
} from './PostComponent.Components';
import PostInfoModal from './PostInfoModal';

const PostComponent = props => {
  const [infoVisible, setInfoVisible] = useState(false);
  const { description } = props;
  return (
    <PostContainer>
      <MiniatureImage
        className="miniatureImage"
        src="/cat_placeholder900x900.jpg"
        thumbnail
      />
      {description}
      <InfoButton
        className="infoButton"
        variant="outline-primary"
        onClick={() => setInfoVisible(true)}
      >
        Informacje
      </InfoButton>
      <PostInfoModal
        modalVisible={infoVisible}
        onHide={() => setInfoVisible(false)}
      />
    </PostContainer>
  );
};

export default PostComponent;
