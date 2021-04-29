import { Button, Image, Navbar, Form } from 'react-bootstrap';
import styled from 'styled-components';

export const CatfinderText = styled(Navbar.Brand)`
  font-weight: bold;
`;

export const ProfileImage = styled(Image)`
  height: 38px;
  width: 38px;
  margin-left: 10px;
  border: 1px solid darkorange;
`;

export const NewPostButton = styled(Button)`
  margin-left: 5px;
  background: darkorange;
  border-color: darkorange;
  &:hover {
    background: white;
    color: darkorange;
    border-color: darkorange;
  }
`;

export const SearchButton = styled(Button)`
  border-color: darkorange;
  color: darkorange;
  &:hover {
    background: darkorange;
    border-color: darkorange;
    color: white;
  }
`;

export const SearchForm = styled(Form.Control)`
  margin-left: 22px;
`;
