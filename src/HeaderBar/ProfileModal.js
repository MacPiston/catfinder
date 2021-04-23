import React from "react";

import { Modal, Tabs, Tab, ListGroup } from "react-bootstrap";

import {
  PostsContainer,
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
  const { views, messages } = props;

  return (
    <ListGroup.Item style={{ borderRadius: "4px", paddingRight: "0px" }}>
      <PostContainer>
        <PostImage height="150" width="150" src="/cat_placeholder900x900.jpg" />
        <StatsContainer>
          <TitleText>Nazwa ogłoszenia</TitleText>
          <HorizontalContainer>
            <DescriptionText>Wyświetlenia: {views}</DescriptionText>
            <DescriptionText>Wiadomości: {messages}</DescriptionText>
          </HorizontalContainer>
          <HorizontalContainer>
            <NormalButton>Odśwież</NormalButton>
            <EndButton variant="outline-danger">Zakończ</EndButton>
          </HorizontalContainer>
        </StatsContainer>
        <RightArrow />
      </PostContainer>
    </ListGroup.Item>
  );
};

class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: "posts" };
  }

  render() {
    const { show, handleClose } = this.props;
    return (
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Twoje konto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Tabs
            activeKey={this.state.currentTab}
            onSelect={(tab) => this.setState({ currentTab: tab })}
          >
            <Tab eventKey="posts" title="Twoje ogłoszenia">
              <PostsContainer>
                <PostComponent views="34" messages="0" />
              </PostsContainer>
            </Tab>
            <Tab eventKey="settings" title="Preferencje">
              Ustawienia
            </Tab>
          </Tabs>
        </Modal.Body>

        <Modal.Footer>
          <NormalButton onClick={handleClose} variant="primary">
            Zamknij
          </NormalButton>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ProfileModal;
