import styled from 'styled-components';

import { Image, Button } from 'react-bootstrap';
import { GoChevronRight } from 'react-icons/go';

export const Container = styled.div`
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

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const RightArrow = styled(GoChevronRight)`
  flex: 1;
  align-self: center;
  height: 36px;
  color: darkorange;
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

export const DescriptionText = styled.h5`
  margin-left: 4px;
`;
