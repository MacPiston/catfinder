import styled from "styled-components";
import { Image } from "react-bootstrap";

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const UpImage = styled(Image)`
  width: 80%;
  height: 80%;
  align-self: center;
`;

export const TitleText = styled.h4`
  font-weight: 600;
`;

export const SecondaryText = styled.h5`
  margin-left: 6px;
`;
