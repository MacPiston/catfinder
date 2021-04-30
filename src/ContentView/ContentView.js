import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './ContentView.css';
import PostComponent from './Post/PostComponent';

const PostContainer = styled.div`
  background: darkgrey;
  border-radius: 4px;
  padding: 5px;
`;

const ContentView = () => {
  <PostContainer>
    <Row lg={4} sm={2} xs={1}>
      <Col>
        <PostComponent description="KEKW" />
      </Col>
      <Col>
        <PostComponent description="LMAO" />
      </Col>
      <Col>
        <PostComponent description="AYAYA" />
      </Col>
      <Col>
        <PostComponent description="SAGDE" />
      </Col>
    </Row>
  </PostContainer>;
};

export default ContentView;
