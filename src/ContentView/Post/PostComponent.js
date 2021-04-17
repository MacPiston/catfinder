import React from "react";
import { Row, Col, Image, Media, Container, Button } from "react-bootstrap";
import {
  MiniatureImage,
  InfoButton,
  PostContainer,
} from "./PostComponent.Components";
import PostInfoModal from "./PostInfoModal";

class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <PostContainer>
        <MiniatureImage
          className={"miniatureImage"}
          src={"/cat_placeholder900x900.jpg"}
          thumbnail
        />
        {this.props.description}
        <InfoButton
          className={"infoButton"}
          variant={"outline-primary"}
          onClick={this.showModal}
        >
          Informacje
        </InfoButton>
        <PostInfoModal
          modalVisible={this.state.modalVisible}
          onHide={this.hideModal}
        />
      </PostContainer>
    );
  }
}

export default PostComponent;
