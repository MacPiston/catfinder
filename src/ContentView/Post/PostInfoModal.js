/* eslint-disable no-template-curly-in-string */
import React, { useContext, useEffect, useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import PostContext from '../PostContext';
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

const PostInfoModal = ({ modalVisible, onHide }) => {
  const [numberVisible, setNumberVisible] = useState(false);
  const { name, date, location, description, whoAdded, number } = useContext(
    PostContext
  );

  const InfoPanelContents = (
    <>
      <TitleText>Imię:</TitleText>
      <SecondaryText>{name}</SecondaryText>

      <TitleText style={{ marginTop: '10px' }}>Lokalizacja:</TitleText>
      <SecondaryText style={{ marginBottom: '10px' }}>{location}</SecondaryText>

      <TitleText style={{ marginTop: '10px' }}>Data dodania:</TitleText>
      <SecondaryText style={{ marginBottom: '10px' }}>{date}</SecondaryText>

      <TitleText>Dodał:</TitleText>
      <SecondaryText>{whoAdded}</SecondaryText>
    </>
  );

  const carouselItems = () => (
    <Carousel.Item>
      <ImageContainer src="/cat_placeholder900x900.jpg" alt="Post image" />
    </Carousel.Item>
  );

  const handleHide = () => {
    setNumberVisible(false);
    onHide();
  };

  return (
    <Modal show={modalVisible} onHide={handleHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      <BodyContainer>
        <UpperBodyContainer>
          <StyledCarousel>{carouselItems()}</StyledCarousel>
          <InfoPanel>{InfoPanelContents}</InfoPanel>
        </UpperBodyContainer>
        <LowerBodyContainer>
          <TitleText>Informacje:</TitleText>
          <DescriptionContainer>{description}</DescriptionContainer>
        </LowerBodyContainer>
      </BodyContainer>
      <Modal.Footer>
        <PrimaryButton>Wyślij wiadomość</PrimaryButton>
        <SecondaryButton onClick={() => setNumberVisible(true)}>
          Wyświetl nr. telefonu
        </SecondaryButton>
        {numberVisible && <NumberComponent number={number} />}
      </Modal.Footer>
    </Modal>
  );
};

export default PostInfoModal;
