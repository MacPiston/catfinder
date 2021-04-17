import React from "react";
import HeaderBar from "./HeaderBar/HeaderBar";
import NewPost from "./NewPost/NewPost";
import ContentViewContainer from "./ContentView/ContentViewContainer";

class App extends React.Component {
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
    const { modalVisible } = this.props;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <HeaderBar newPostButtonHandler={this.showModal} />
        <NewPost
          visible={this.state.modalVisible}
          hideHandler={this.hideModal}
        />
        <ContentViewContainer />
      </div>
    );
  }
}

export default App;
