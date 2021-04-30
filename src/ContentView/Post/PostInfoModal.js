import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import {
  BodyContainer,
  ImageContainer,
  TitleText,
  UpperBodyContainer,
  InfoPanel,
  StyledCarousel,
  LowerBodyContainer,
  SecondaryText,
  DescriptionContainer,
  PrimaryButton,
  SecondaryButton,
} from './PostInfoModal.Components';

function NumberComponent(props) {
  const { number } = props;
  return (
    <div style={{ fontSize: 17 }}>
      <a href="tel:${ props.number }">{number}</a>
    </div>
  );
}

const PostInfoModal = props => {
  const [numberVisible, setNumberVisible] = useState(false);

  const postInfo = {
    title: '???',
    name: 'none',
    location: 'none',
    number: '666666666',
    date: 'none',
    whoAdded: 'none',
    description: 'none',
  };

  const InfoPanelContents = (
    <>
      <TitleText>Imię:</TitleText>
      <SecondaryText>{postInfo.name}</SecondaryText>

      <TitleText style={{ marginTop: '10px' }}>Lokalizacja:</TitleText>
      <SecondaryText style={{ marginBottom: '10px' }}>
        {postInfo.location}
      </SecondaryText>

      <TitleText style={{ marginTop: '10px' }}>Data dodania:</TitleText>
      <SecondaryText style={{ marginBottom: '10px' }}>
        {postInfo.date}
      </SecondaryText>

      <TitleText>Dodał:</TitleText>
      <SecondaryText>{postInfo.whoAdded}</SecondaryText>
    </>
  );

  const carouselItems = () => (
    <Carousel.Item>
      <ImageContainer src="/cat_placeholder900x900.jpg" alt="Post image" />
    </Carousel.Item>
  );

  const { modalVisible, onHide } = props;

  return (
    <Modal show={modalVisible} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{postInfo.title}</Modal.Title>
      </Modal.Header>
      <BodyContainer>
        <UpperBodyContainer>
          <StyledCarousel>{carouselItems()}</StyledCarousel>
          <InfoPanel>{InfoPanelContents}</InfoPanel>
        </UpperBodyContainer>
        <LowerBodyContainer>
          <TitleText>Informacje:</TitleText>
          <DescriptionContainer>{postInfo.description}</DescriptionContainer>
        </LowerBodyContainer>
      </BodyContainer>
      <Modal.Footer>
        <PrimaryButton>Wyślij wiadomość</PrimaryButton>
        <SecondaryButton onClick={() => setNumberVisible(true)}>
          Wyświetl nr. telefonu
        </SecondaryButton>
        {numberVisible && <NumberComponent number={postInfo.number} />}
      </Modal.Footer>
    </Modal>
  );
};

export default PostInfoModal;
