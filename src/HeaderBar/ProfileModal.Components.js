import styled from "styled-components";

import { Image, Button } from "react-bootstrap";

export const PostsContainer = styled.div`
  margin-top: 6px;
  margin-bottom: 6px;
  padding-left: 4px;
  padding-right: 4px;
  width: 100%;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostImage = styled(Image)`
  flex: 3;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 4px;
`;

export const StatsContainer = styled.div`
  flex: 6;
  padding: 6px;
  margin-left: 6px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  background-color: lightgrey;
`;

export const NormalButton = styled(Button)`
  color: white;
  background-color: darkorange;
  border-color: darkorange;
  &:hover {
    color: darkorange;
    background-color: transparent;
    border-color: darkorange;
  }
`;

export const EndButton = styled(Button)``;

export const TitleText = styled.h3`
  font-weight: 600;
  align-self: center;
`;
