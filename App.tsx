import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/mainNavigator';
import {NameProvider} from './src/components/molecules/nameContext';

const App = () => {
  return (
    <NavigationContainer>
      <NameProvider>
        <MainNavigator />
      </NameProvider>
    </NavigationContainer>
  );
};

export default App;
