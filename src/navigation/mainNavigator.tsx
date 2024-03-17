import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Settings from '../screens/settings';
const MainStackNavigator = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
