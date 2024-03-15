import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../screens/home';
import details from '../screens/details';
import settings from '../screens/settings';

const MainStackNavigator = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen name='Home' component={home}/>
      <MainStackNavigator.Screen name='Details' component={details}/>
      <MainStackNavigator.Screen name='Settings' component={settings}/>
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;