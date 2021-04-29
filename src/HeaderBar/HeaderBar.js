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

const HeaderBar = props => {
  const { newPostButtonHandler } = props;
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [activeTabs, setActiveTabs] = useState({
    home: true,
    cats: false,
    dogs: false,
    others: false,
  });

  return (
    <div id="navbarContainer">
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
            <NewPostButton variant="primary" onClick={newPostButtonHandler}>
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
    </div>
  );
};
// class HeaderBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       profileModalVisible: false,
//       activeTabs: { home: true, cats: false, dogs: false, others: false },
//     };
//   }

//   switchModal = value => {
//     this.setState({
//       profileModalVisible: value,
//     });
//   };

//   render() {
//     const { activeTabs, profileModalVisible } = this.state;
//     const { newPostButtonHandler } = this.props;
//     return (
//       <div id="navbarContainer">
//         <Navbar className="navbarOrange" bg="light" expand="lg">
//           <CatfinderText>CatFinder</CatfinderText>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse>
//             <Nav className="mr-lg-1">
//               <Nav.Link id="headerLink" active={activeTabs.home}>
//                 Strona główna
//               </Nav.Link>
//               <Nav.Link id="headerLink" active={activeTabs.cats}>
//                 Koty
//               </Nav.Link>
//               <Nav.Link id="headerLink" active={activeTabs.dogs}>
//                 Psy
//               </Nav.Link>
//               <Nav.Link id="headerLink" active={activeTabs.others}>
//                 Pozostałe
//               </Nav.Link>
//               <NewPostButton variant="primary" onClick={newPostButtonHandler}>
//                 Dodaj ogłoszenie
//               </NewPostButton>
//             </Nav>
//           </Navbar.Collapse>

//           <Form inline id="searchForm" style={{ marginRight: '6px' }}>
//             <InputGroup className="mr-lg-1">
//               <SearchForm placeholder="Szukaj..." />
//               <InputGroup.Append>
//                 <SearchButton variant="outline-primary">Szukaj</SearchButton>
//               </InputGroup.Append>
//             </InputGroup>
//           </Form>

//           <Navbar.Text>Użytkownik:</Navbar.Text>
//           <ProfileImage
//             onClick={() => this.switchModal(true)}
//             src="/profile_placeholder612x612.jpg"
//             rounded
//           />
//         </Navbar>

//         <ProfileModal
//           show={profileModalVisible}
//           handleClose={() => this.switchModal(false)}
//         />
//       </div>
//     );
//   }
// }

export default HeaderBar;
