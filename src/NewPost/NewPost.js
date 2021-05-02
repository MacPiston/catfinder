import React, { useReducer } from 'react';
import { Modal, Form, Col } from 'react-bootstrap';
import {
  ImagesContainer,
  ImageUploadContainer,
  TitleText,
  SecondaryText,
  UpImage,
  PrimaryButton,
} from './NewPost.Components';

const valuesReducer = (values, action) => {
  const { name, value } = action.source;
  switch (name) {
    case 'name':
      return { ...values, name: value };
    case 'location':
      return { ...values, location: value };
    case 'date':
      return { ...values, date: value };
    case 'description':
      return { ...values, description: value };
    case 'type':
      return { ...values, type: value };
    default:
      throw Error('Unhandled switch');
  }
};

const initialValues = {
  name: 'none',
  location: 'none',
  date: 'none',
  whoAdded: 'none',
  description: 'none',
  type: 'none',
};

const NewPost = props => {
  const { show, handleClose } = props;
  const [values, dispatch] = useReducer(valuesReducer, initialValues);

  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nowe ogłoszenie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TitleText>Informacje</TitleText>
        <Form.Row>
          <Form.Group as={Col}>
            <SecondaryText>Imię</SecondaryText>
            <Form.Control
              type="text"
              name="name"
              placeholder="Imię"
              onChange={event => dispatch({ source: event.target })}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <SecondaryText>Lokalizacja</SecondaryText>
            <Form.Control
              type="text"
              name="location"
              placeholder="Lokalizacja"
              onChange={event => dispatch({ source: event.target })}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <SecondaryText>Data zaginięcia</SecondaryText>
            <Form.Control
              type="date"
              name="date"
              placeholder="Data zaginięcia"
              onChange={event => dispatch({ source: event.target })}
            />
          </Form.Group>
        </Form.Row>

        <SecondaryText style={{ marginTop: '8px' }}>Typ</SecondaryText>
        <Form.Row style={{ marginLeft: '8px' }}>
          <Form.Check
            inline
            label="Kot"
            type="radio"
            name="type"
            value="cat"
            onChange={event => dispatch({ source: event.target })}
          />
          <Form.Check
            inline
            label="Pies"
            type="radio"
            name="type"
            value="dog"
            onChange={event => dispatch({ source: event.target })}
          />
          <Form.Check
            inline
            label="Inny"
            type="radio"
            name="type"
            value="other"
            onChange={event => dispatch({ source: event.target })}
          />
        </Form.Row>

        <SecondaryText style={{ marginTop: '8px' }}>
          Cechy charakterystyczne
        </SecondaryText>
        <Form.Control type="text" name="tags" placeholder="Tagi..." />

        <SecondaryText style={{ marginTop: '8px' }}>Opis</SecondaryText>
        <Form.Control
          as="textarea"
          name="description"
          rows={2}
          onChange={event => dispatch({ source: event.target })}
        />

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
};

export default NewPost;
