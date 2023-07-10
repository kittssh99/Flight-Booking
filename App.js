import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './src/store/store';
import StackNavigator from './src/navigations/StackNavigator';

const App = () => {
  return (
    <StoreProvider store={store}>
      <StackNavigator />
    </StoreProvider>
  );
};

export default App;
