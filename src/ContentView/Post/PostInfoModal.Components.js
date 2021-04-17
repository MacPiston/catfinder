import styled from "styled-components";
import { Modal, Image, Carousel, Button } from "react-bootstrap";

export const BodyContainer = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
`;

export const UpperBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledCarousel = styled(Carousel)`
  flex: 2;
  border: 1px solid darkorange;
  border-radius: 4px;
  padding: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const InfoPanel = styled.div`
  justify-content: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: darkorange;
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 6px;
  padding-left: 16px;
`;

export const ImageContainer = styled(Image)`
  width: 75%;
  height: 75%;
`;

export const LowerBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const TitleText = styled.h4`
  font-weight: 600;
`;

export const SecondaryText = styled.h5`
  margin-left: 6px;
`;

export const DescriptionContainer = styled.div`
  flex: 1;
  border: 1px solid orange;
  border-radius: 4px;
  padding: 4px;
`;

export const PrimaryButton = styled(Button)`
  background-color: darkorange;
  border-color: darkorange;
  &:hover {
    background-color: white;
    color: darkorange;
    border-color: darkorange;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: white;
  color: darkorange;
  border-color: darkorange;
  &:hover {
    background-color: darkorange;
    color: white;
    border-color: darkorange;
  }
`;
