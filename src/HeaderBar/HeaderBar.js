import React from 'react';
import {Container, Navbar, Nav, Form, Button, Image, InputGroup, FormControl, Modal} from "react-bootstrap";
import "./HeaderBar.css"

const ProfileModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Twoje konto</Modal.Title>
            </Modal.Header>
            <Button style={{width: "60%", alignSelf: "center"}} onClick={props.handleClose} variant="primary">
                Zamknij
            </Button>
        </Modal>
    )
}

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileModalVisible: false,
            activeTabs: {'home': false, 'cats': false, 'dogs': true, 'others': false}
        }
    }

    switchModal = (value) => {
        this.setState({
            profileModalVisible: value,
        })
    }

    render() {
        const {activeTabs} = this.state;

        return (
            <div id={"navbarContainer"}>
                <Navbar className={"navbarOrange"} bg={"light"} expand={"lg"}>
                    <Navbar.Brand id={"catfinderText"}>CatFinder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className={"mr-lg-1"}>
                            <Nav.Link id={"headerLink"} active={activeTabs['home']}>Strona główna</Nav.Link>
                            <Nav.Link id={"headerLink"} active={activeTabs['cats']}>Koty</Nav.Link>
                            <Nav.Link id={"headerLink"} active={activeTabs['dogs']}>Psy</Nav.Link>
                            <Nav.Link id={"headerLink"} active={activeTabs['others']}>Pozostałe</Nav.Link>
                            <Button id={"newPostButton"} variant={"primary"}
                                    onClick={this.props.newPostButtonHandler}>Dodaj ogłoszenie</Button>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline id={"searchForm"}>
                        <InputGroup className={"mr-lg-1"}>
                            <FormControl
                                placeholder="Szukaj..."/>
                            <InputGroup.Append>
                                <Button id={"searchButton"} variant={"outline-primary"}>Szukaj</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                    <Navbar.Text>Użytkownik:</Navbar.Text>
                    <Image onClick={() => this.switchModal(true)} id={"profileImage"}
                           src={"/profile_placeholder612x612.jpg"} rounded/>
                </Navbar>
                <ProfileModal show={this.state.profileModalVisible} handleClose={() => this.switchModal(false)}/>
            </div>
        );
    }
}

export default HeaderBar;