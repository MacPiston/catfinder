import React from 'react';
import {
  MiniatureImage,
  InfoButton,
  PostContainer,
} from './PostComponent.Components';
import PostInfoModal from './PostInfoModal';

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
    const { description } = this.props;
    const { modalVisible } = this.state;
    return (
      <PostContainer>
        <MiniatureImage
          className="miniatureImage"
          src="/cat_placeholder900x900.jpg"
          thumbnail
        />
        {description}
        <InfoButton
          className="infoButton"
          variant="outline-primary"
          onClick={this.showModal}
        >
          Informacje
        </InfoButton>
        <PostInfoModal modalVisible={modalVisible} onHide={this.hideModal} />
      </PostContainer>
    );
  }
}

export default PostComponent;
