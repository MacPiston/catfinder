import React from "react";
import { Modal, Carousel, Form } from "react-bootstrap";
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
} from "./PostInfoModal.Components";

function NumberComponent(props) {
  return <div style={{ fontSize: 17 }}>{props.number}</div>;
}

class PostInfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberVisible: false };
  }

  postInfo = {
    title: "???",
    name: "none",
    location: "none",
    number: "666666666",
    date: "none",
    whoAdded: "none",
    description: "none",
  };

  showNumber = () => {
    this.setState({ numberVisible: true });
  };

  carouselItems() {
    return (
      <Carousel.Item>
        <ImageContainer src="/cat_placeholder900x900.jpg" alt="Post image" />
      </Carousel.Item>
    );
  }

  InfoPanelContents = (
    <>
      <TitleText>Imię:</TitleText>
      <SecondaryText>{this.postInfo.name}</SecondaryText>

      <TitleText style={{ marginTop: "10px" }}>Lokalizacja:</TitleText>
      <SecondaryText style={{ marginBottom: "10px" }}>
        {this.postInfo.location}
      </SecondaryText>

      <TitleText style={{ marginTop: "10px" }}>Data dodania:</TitleText>
      <SecondaryText style={{ marginBottom: "10px" }}>
        {this.postInfo.date}
      </SecondaryText>

      <TitleText>Dodał:</TitleText>
      <SecondaryText>{this.postInfo.whoAdded}</SecondaryText>
    </>
  );

  render() {
    return (
      <Modal
        show={this.props.modalVisible}
        onHide={this.props.onHide}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.postInfo.title}</Modal.Title>
        </Modal.Header>
        <BodyContainer>
          <UpperBodyContainer>
            <StyledCarousel>{this.carouselItems()}</StyledCarousel>
            <InfoPanel>{this.InfoPanelContents}</InfoPanel>
          </UpperBodyContainer>
          <LowerBodyContainer>
            <TitleText>Informacje:</TitleText>
            <DescriptionContainer>
              {this.postInfo.description}
            </DescriptionContainer>
          </LowerBodyContainer>
        </BodyContainer>
        <Modal.Footer>
          <PrimaryButton>Wyślij wiadomość</PrimaryButton>
          <SecondaryButton onClick={this.showNumber}>
            Wyświetl nr. telefonu
          </SecondaryButton>
          {this.state.numberVisible && (
            <NumberComponent number={this.postInfo.number} />
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PostInfoModal;
