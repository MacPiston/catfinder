import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PostComponent from './Post/PostComponent';
import PostContext from './PostContext';

const PostContainer = styled.div`
  background: darkgrey;
  border-radius: 4px;
  padding: 5px;
`;

const ContentView = () => (
  <PostContainer>
    <Row lg={4} sm={2} xs={1}>
      <Col>
        <PostContext.Provider
          value={{ name: 'Test', location: 'tgliwice', date: '22.01' }}
        >
          <PostComponent />
        </PostContext.Provider>
      </Col>
      <Col>
        <PostComponent info={{}} />
      </Col>
      <Col>
        <PostComponent info={{}} />
      </Col>
      <Col>
        <PostComponent info={{}} />
      </Col>
    </Row>
  </PostContainer>
);

export default ContentView;
