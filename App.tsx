import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/mainNavigator';
import {Text, useColorScheme} from 'react-native';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer>
      <MainNavigator />
      <Text>Current Color Scheme: {colorScheme}</Text>
    </NavigationContainer>
  );
};

export default App;
