import React, {Component} from 'react';
import {Row, Col} from "react-bootstrap";
import "./ContentView.css"
import PostComponent from "./PostComponent";

class ContentView extends Component {
    render() {
        return (
            <div id={"contentView"}>
                <Row lg={4} sm={2} xs={1}>
                    <Col>
                        <PostComponent description={"KEKW"} />
                    </Col>
                    <Col>
                        <PostComponent description={"LMAO"} />
                    </Col>
                    <Col>
                        <PostComponent description={"AYAYA"} />
                    </Col>
                    <Col>
                        <PostComponent description={"SAGDE"} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContentView;