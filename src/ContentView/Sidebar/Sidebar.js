import React from 'react';
import { Form } from 'react-bootstrap';
import {
  StyledSidebar,
  StandardText,
  BoldText,
  HeaderContainer,
  InputContainer,
  FilterButton,
} from './Sidebar.Components';

const Sidebar = () => {
  const sortTypes = [
    'Najnowsze',
    'Najstarsze',
    'Najpopularniejsze',
    'Najmniej popularne',
  ];

  const sorts = sortTypes.map(type => <option>{type}</option>);

  const colorTypes = [
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'c8',
    'c9',
    'c10',
  ];

  const colors = colorTypes.map(type => <option>{type}</option>);

  const onFilterSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onFilterSubmit}>
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
            {colors}
          </Form.Control>
        </InputContainer>

        <HeaderContainer>
          <BoldText>Sortuj</BoldText>
        </HeaderContainer>
        <InputContainer>
          <Form.Control as="select" id="formInput.sort">
            {sorts}
          </Form.Control>
        </InputContainer>

        <FilterButton variant="primary-outline" type="submit">
          Filtruj
        </FilterButton>
      </StyledSidebar>
    </Form>
  );
};

export default Sidebar;
