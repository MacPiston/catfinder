import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Sidebar.css';
import {
  StyledSidebar,
  StandardText,
  BoldText,
  HeaderContainer,
  InputContainer,
  CheckboxContainer,
} from './Sidebar.Components';

class Sidebar extends Component {
  sortTypes = [
    'Najnowsze',
    'Najstarsze',
    'Najpopularniejsze',
    'Najmniej popularne',
  ];

  sorts = this.sortTypes.map(type => <option>{type}</option>);

  checkboxTypes = {
    all: 'Wszystkie',
    cats: 'Koty',
    dogs: 'Psy',
    others: 'Pozostałe',
  };

  checks = () => {
    let temp = '';
    for (const key in this.checkboxTypes) {
      temp += (
        <Form.Check type="checkbox" id={key} label={this.checkboxTypes[key]} />
      );
    }
    return temp;
  };

  onFilterSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <StyledSidebar>
        <Form onSubmit={this.onFilterSubmit}>
          <HeaderContainer>
            <BoldText>Lokalizacja</BoldText>
          </HeaderContainer>

          <InputContainer>
            <StandardText>Miejscowość</StandardText>
            <Form.Control
              className="formInput"
              id="formInput.city"
              type="text"
              placeholder="Miejscowość..."
            />
          </InputContainer>

          <InputContainer>
            <StandardText>Województwo</StandardText>
            <Form.Control
              className="formInput"
              id="formInput.state"
              type="text"
              placeholder="Województwo..."
            />
          </InputContainer>

          <HeaderContainer style={{ marginTop: '15px' }}>
            <BoldText>Rodzaj</BoldText>
          </HeaderContainer>

          <CheckboxContainer>
            {/* <Form.Check type={"checkbox"} id={"all"} label={"Wszystkie"} />
            <Form.Check type={"checkbox"} id={"cats"} label={"Koty"} />
            <Form.Check type={"checkbox"} id={"dogs"} label={"Psy"} />
            <Form.Check type={"checkbox"} id={"others"} label={"Pozostałe"} /> */}
            {this.checks()}
          </CheckboxContainer>

          <HeaderContainer>
            <BoldText>Sortuj</BoldText>
          </HeaderContainer>

          <InputContainer>
            <Form.Control as="select" id="formInput.sort">
              {this.sorts}
            </Form.Control>
          </InputContainer>

          <Button id="formSubmitButton" variant="outline-primary" type="submit">
            Filtruj
          </Button>
        </Form>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
