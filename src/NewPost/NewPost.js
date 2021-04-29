import React from 'react';
import { Modal, Form, Col } from 'react-bootstrap';
import {
  ImagesContainer,
  ImageUploadContainer,
  TitleText,
  SecondaryText,
  UpImage,
  PrimaryButton,
} from './NewPost.Components';

class NewPost extends React.PureComponent {
  render() {
    const { visible, hideHandler } = this.props;
    return (
      <Modal size="lg" centered show={visible} onHide={hideHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Nowe ogłoszenie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TitleText>Informacje</TitleText>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="">
                <SecondaryText>Imię</SecondaryText>
                <Form.Control type="text" placeholder="Imię" />
              </Form.Group>
              <Form.Group as={Col} controlId="">
                <SecondaryText>Lokalizacja</SecondaryText>
                <Form.Control type="text" placeholder="Lokalizacja" />
              </Form.Group>
              <Form.Group as={Col} controlId="">
                <SecondaryText>Data zaginięcia</SecondaryText>
                <Form.Control type="date" placeholder="Data zaginięcia" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <SecondaryText>Opis</SecondaryText>
              <Form.Control as="textarea" rows={2} />
            </Form.Row>
          </Form>
          <Form style={{ marginTop: '12px' }}>
            <SecondaryText>Typ</SecondaryText>
            <Form.Row style={{ marginLeft: '8px' }}>
              <Form.Check inline label="Kot" type="radio" />
              <Form.Check inline label="Pies" type="radio" />
              <Form.Check inline label="Inny" type="radio" />
            </Form.Row>
          </Form>
          <TitleText style={{ marginTop: '12px' }}>Zdjęcia</TitleText>
          <ImagesContainer>
            <ImageUploadContainer>
              <SecondaryText>Zdjęcie 1</SecondaryText>
              <UpImage src="/cat_placeholder900x900.jpg" />
              <Form.File name="file" label="" id="photo1" />
            </ImageUploadContainer>
            <ImageUploadContainer>
              <SecondaryText>Zdjęcie 2</SecondaryText>
              <UpImage src="/cat_placeholder900x900.jpg" />
              <Form.File name="file" label="" id="photo2" />
            </ImageUploadContainer>
            <ImageUploadContainer>
              <SecondaryText>Zdjęcie 3</SecondaryText>
              <UpImage src="/cat_placeholder900x900.jpg" />
              <Form.File name="file" label="" id="photo3" />
            </ImageUploadContainer>
          </ImagesContainer>
        </Modal.Body>
        <Modal.Footer>
          <PrimaryButton>Dodaj ogłoszenie</PrimaryButton>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewPost;
