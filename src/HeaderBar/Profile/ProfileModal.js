import React from "react";

import { Modal, Tabs, Tab } from "react-bootstrap";

import { Container, NormalButton } from "./ProfileModal.Components";

import PostComponent from "./PostComponent";

import ProfileSettings from "./ProfileSettings";

class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: "posts" };
  }

  hideModal = () => {
    this.setState({ currentTab: "posts" });
    this.props.handleClose();
  };

  render() {
    const { show } = this.props;
    return (
      <Modal show={show} onHide={this.hideModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Twoje konto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Tabs
            activeKey={this.state.currentTab}
            onSelect={(tab) => this.setState({ currentTab: tab })}
          >
            <Tab eventKey="posts" title="Twoje ogłoszenia">
              <Container>
                <PostComponent title="none" views="-1" messages="-1" />
              </Container>
            </Tab>
            <Tab eventKey="settings" title="Preferencje">
              <Container>
                <ProfileSettings />
              </Container>
            </Tab>
          </Tabs>
        </Modal.Body>

        <Modal.Footer>
          <NormalButton onClick={this.hideModal} variant="primary">
            Zamknij
          </NormalButton>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ProfileModal;
