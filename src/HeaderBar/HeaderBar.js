import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  Image,
  InputGroup,
  FormControl,
  Modal,
} from "react-bootstrap";

import {
  CatfinderText,
  ProfileImage,
  NewPostButton,
  SearchButton,
  SearchForm,
} from "./HeaderBar.Components";

const ProfileModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Twoje konto</Modal.Title>
      </Modal.Header>
      <Button
        style={{ width: "60%", alignSelf: "center" }}
        onClick={props.handleClose}
        variant="primary"
      >
        Zamknij
      </Button>
    </Modal>
  );
};

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileModalVisible: false,
      activeTabs: { home: true, cats: false, dogs: false, others: false },
    };
  }

  switchModal = (value) => {
    this.setState({
      profileModalVisible: value,
    });
  };

  render() {
    const { activeTabs } = this.state;

    return (
      <div id={"navbarContainer"}>
        <Navbar className={"navbarOrange"} bg={"light"} expand={"lg"}>
          <CatfinderText>CatFinder</CatfinderText>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse>
            <Nav className={"mr-lg-1"}>
              <Nav.Link id={"headerLink"} active={activeTabs["home"]}>
                Strona główna
              </Nav.Link>
              <Nav.Link id={"headerLink"} active={activeTabs["cats"]}>
                Koty
              </Nav.Link>
              <Nav.Link id={"headerLink"} active={activeTabs["dogs"]}>
                Psy
              </Nav.Link>
              <Nav.Link id={"headerLink"} active={activeTabs["others"]}>
                Pozostałe
              </Nav.Link>
              <NewPostButton
                variant={"primary"}
                onClick={this.props.newPostButtonHandler}
              >
                Dodaj ogłoszenie
              </NewPostButton>
            </Nav>
          </Navbar.Collapse>

          <Form inline id={"searchForm"}>
            <InputGroup className={"mr-lg-1"}>
              <SearchForm placeholder="Szukaj..." />
              <InputGroup.Append>
                <SearchButton variant={"outline-primary"}>Szukaj</SearchButton>
              </InputGroup.Append>
            </InputGroup>
          </Form>

          <Navbar.Text>Użytkownik:</Navbar.Text>
          <ProfileImage
            onClick={() => this.switchModal(true)}
            src={"/profile_placeholder612x612.jpg"}
            rounded
          />
        </Navbar>

        <ProfileModal
          show={this.state.profileModalVisible}
          handleClose={() => this.switchModal(false)}
        />
      </div>
    );
  }
}

export default HeaderBar;
