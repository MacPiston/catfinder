import React from "react";
import {Row, Col, Image, Media, Container, Button} from "react-bootstrap";
import "./PostComponent.css"

const PostComponent = (props) => {
    return (
        <div className={"postComponent"}>
            <Container>
                <Row>
                    <Image className={"miniatureImage"} src={"/cat_placeholder900x900.jpg"} thumbnail/>
                </Row>
                <Row>
                    {props.description}
                </Row>
                <Row>
                    <Button className={"infoButton"} variant={"outline-primary"}>
                        Informacje
                    </Button>
                </Row>
            </Container>
        </div>
    )
}

export default PostComponent