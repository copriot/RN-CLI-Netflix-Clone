import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './source/router/rootNavigation';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
