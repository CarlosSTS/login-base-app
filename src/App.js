import React from 'react';
import {StatusBar} from 'react-native';
// import { Container } from './styles';

import Routes from './routes';
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3d9be9" />
      <Routes />
    </>
  );
};

export default App;
