import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from '../screens/home';
import details from '../screens/details';
import settings from '../screens/settings';

const MainStackNavigator = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <>
      <MainStackNavigator.Navigator>
        <MainStackNavigator.Screen name="Home" component={home} options={{ headerShown: false }} />
        <MainStackNavigator.Screen name="Details" component={details} options={{ headerShown: false }}/>
        <MainStackNavigator.Screen name="Settings" component={settings} options={{ headerShown: false }}/>
      </MainStackNavigator.Navigator>
    </>
  );
};

export default MainNavigator;
