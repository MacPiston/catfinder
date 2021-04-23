import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export const OptionContainerV = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionContainerH = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Input = styled(Form.Control)`
  width: 100%;
`;

export const OptionText = styled.h4`
  font-weight: 600;
`;

export const TipText = styled.h6`
  margin-top: 8px;
  color: lightgray;
  align-self: center;
`;

export const NormalButton = styled(Button)`
  margin-top: 10px;
  width: 60%;
  align-self: center;
  color: white;
  background-color: darkorange;
  border-color: darkorange;
  &:hover {
    color: darkorange;
    background-color: transparent;
    border-color: darkorange;
  }
`;
