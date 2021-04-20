import React from "react";

import { Modal, Button, Tabs, Tab, ListGroup } from "react-bootstrap";
import { GoChevronRight } from "react-icons/go";

import {
  PostsContainer,
  PostContainer,
  PostImage,
  StatsContainer,
  NormalButton,
  EndButton,
  TitleText,
} from "./ProfileModal.Components";

const PostComponent = (props) => {
  return (
    <ListGroup.Item style={{ borderRadius: "4px", paddingRight: "0px" }}>
      <PostContainer>
        <PostImage src="/cat_placeholder900x900.jpg" />
        <StatsContainer>
          <TitleText>Nazwa ogłoszenia</TitleText>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <NormalButton>Odśwież</NormalButton>
            <EndButton variant="outline-danger">Zakończ</EndButton>
          </div>
        </StatsContainer>
        <GoChevronRight
          style={{
            flex: 1,
            alignSelf: "center",
            height: "36px",
            color: "darkorange",
          }}
        />
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
                <PostComponent />
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
