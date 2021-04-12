import React from "react";
import './App.css';
import HeaderBar from "./HeaderBar/HeaderBar";
import NewPost from "./NewPost";
import ContentViewContainer from "./ContentView/ContentViewContainer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }

    switchModal = (value) => {
        this.setState({
            modalVisible: value,
        })
    }

    render() {
        const {modalVisible} = this.props
        return (
            <div className="App">
                <HeaderBar newPostButtonHandler={() => {this.switchModal(true)}} />
                {/*<NewPost visible={modalVisible} hideHandler={() => {this.switchModal(false)}} />*/}
                <ContentViewContainer />
            </div>
        );
    }
}

export default App;
