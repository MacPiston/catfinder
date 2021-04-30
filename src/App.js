import React from 'react';
import HeaderBar from './HeaderBar/HeaderBar';
import ContentViewContainer from './ContentView/ContentViewContainer';

const App = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <HeaderBar />
    <ContentViewContainer />
  </div>
);

export default App;
