import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';
import ContentView from './ContentView';

const ContentViewContainer = () => (
  <Container fluid>
    <Row>
      <Col md="2">
        <Sidebar />
      </Col>
      <Col>
        <ContentView />
      </Col>
    </Row>
  </Container>
);

export default ContentViewContainer;
