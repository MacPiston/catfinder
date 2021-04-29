import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import {
  StyledSidebar,
  StandardText,
  BoldText,
  HeaderContainer,
  InputContainer,
  FilterButton,
} from './Sidebar.Components';

class Sidebar extends Component {
  sortTypes = [
    'Najnowsze',
    'Najstarsze',
    'Najpopularniejsze',
    'Najmniej popularne',
  ];

  sorts = this.sortTypes.map(type => <option>{type}</option>);

  colorTypes = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'];

  colors = this.colorTypes.map(type => <option>{type}</option>);

  onFilterSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.onFilterSubmit}>
        <StyledSidebar>
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
            <BoldText>Kolor</BoldText>
          </HeaderContainer>
          <InputContainer>
            <Form.Control as="select" id="formInput.color">
              {this.colors}
            </Form.Control>
          </InputContainer>

          <HeaderContainer>
            <BoldText>Sortuj</BoldText>
          </HeaderContainer>
          <InputContainer>
            <Form.Control as="select" id="formInput.sort">
              {this.sorts}
            </Form.Control>
          </InputContainer>

          <FilterButton variant="primary-outline" type="submit">
            Filtruj
          </FilterButton>
        </StyledSidebar>
      </Form>
    );
  }
}

export default Sidebar;
