import styled from "styled-components";
import { Form } from "react-bootstrap";

export const StyledSidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: darkorange;
  border-radius: 4px;
  padding: 8px;
  padding-top: 0px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 8px;
`;

export const BoldText = styled.text`
  font-size: 20px;
  font-weight: 700;
`;

export const StandardText = styled.text`
  font-size: 16px;
`;

export const CheckboxContainer = styled.div`
  margin-top: 5px;
  margin-left: 8px;
  margin-bottom: 8px;
`;

export const StyledTextInput = styled.input``;

export const StyledCheckbox = styled(Form.Check)``;
