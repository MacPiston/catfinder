import React from 'react';
import {Modal, Button} from "react-bootstrap";

const NewPost = (props) => {
    return (
        <Modal size={"lg"} centered show={props.visible} onHide={props.hideHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Nowe ogłoszenie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Czemu kurwo głupia nie działasz HE?!
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewPost;