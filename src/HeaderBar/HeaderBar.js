import React, { useState } from 'react';
import { Navbar, Nav, Form, InputGroup } from 'react-bootstrap';

import {
  CatfinderText,
  ProfileImage,
  NewPostButton,
  SearchButton,
  SearchForm,
} from './HeaderBar.Components';

import ProfileModal from './Profile/ProfileModal';
import NewPost from '../NewPost/NewPost';

const HeaderBar = () => {
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [newPostModalVisible, setNewPostModalVisible] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [activeTabs, setActiveTabs] = useState({
    home: true,
    cats: false,
    dogs: false,
    others: false,
  });

  return (
    <>
      <Navbar className="navbarOrange" bg="light" expand="lg">
        <CatfinderText>CatFinder</CatfinderText>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>
          <Nav className="mr-lg-1">
            <Nav.Link id="headerLink" active={activeTabs.home}>
              Strona główna
            </Nav.Link>
            <Nav.Link id="headerLink" active={activeTabs.cats}>
              Koty
            </Nav.Link>
            <Nav.Link id="headerLink" active={activeTabs.dogs}>
              Psy
            </Nav.Link>
            <Nav.Link id="headerLink" active={activeTabs.others}>
              Pozostałe
            </Nav.Link>
            <NewPostButton
              variant="primary"
              onClick={() => setNewPostModalVisible(true)}
            >
              Dodaj ogłoszenie
            </NewPostButton>
          </Nav>
        </Navbar.Collapse>

        <Form inline id="searchForm" style={{ marginRight: '6px' }}>
          <InputGroup className="mr-lg-1">
            <SearchForm placeholder="Szukaj..." />
            <InputGroup.Append>
              <SearchButton variant="outline-primary">Szukaj</SearchButton>
            </InputGroup.Append>
          </InputGroup>
        </Form>

        <Navbar.Text>Użytkownik:</Navbar.Text>
        <ProfileImage
          onClick={() => setProfileModalVisible(true)}
          src="/profile_placeholder612x612.jpg"
          rounded
        />
      </Navbar>

      <ProfileModal
        show={profileModalVisible}
        handleClose={() => setProfileModalVisible(false)}
      />

      <NewPost
        show={newPostModalVisible}
        handleClose={() => setNewPostModalVisible(false)}
      />
    </>
  );
};

export default HeaderBar;
