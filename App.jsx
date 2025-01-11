import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './source/router/rootNavigation';
import {Provider} from 'react-redux';
import store from './source/store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
