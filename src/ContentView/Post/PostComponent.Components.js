import styled from "styled-components";
import { Image, Button } from "react-bootstrap";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid darkorange;
`;

export const MiniatureImage = styled(Image)`
  height: 80%;
  width: 80%;
`;

export const InfoButton = styled(Button)`
  width: 70%;
  color: darkorange;
  border-color: darkorange;

  &:hover {
    color: white;
    background-color: darkorange;
    border-color: darkorange;
  }
`;
