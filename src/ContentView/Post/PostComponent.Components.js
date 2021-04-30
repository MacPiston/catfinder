import styled from 'styled-components';
import { Image, Button } from 'react-bootstrap';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 5px;
  padding-bottom: 0px;
  border-radius: 4px;
  border: 1px solid darkorange;
`;

export const DescriptionLine = styled.div`
  width: 75%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const DescriptionBold = styled.h6`
  font-weight: 600;
`;

export const Description = styled.h6``;

export const MiniatureImage = styled(Image)`
  height: 80%;
  width: 80%;
  margin-bottom: 6px;
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
