import React, { useState } from 'react';

import { Modal, Tabs, Tab } from 'react-bootstrap';

import { Container, NormalButton } from './ProfileModal.Components';

import PostComponent from './PostComponent';

import ProfileSettings from './ProfileSettings';

const ProfileModal = props => {
  const { show, handleClose } = props;
  const [currentTab, setCurrentTab] = useState('posts');

  const hideModal = () => {
    setCurrentTab('posts');
    handleClose();
  };

  return (
    <Modal show={show} onHide={hideModal} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Twoje konto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Tabs activeKey={currentTab} onSelect={tab => setCurrentTab(tab)}>
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
        <NormalButton onClick={hideModal} variant="primary">
          Zamknij
        </NormalButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
