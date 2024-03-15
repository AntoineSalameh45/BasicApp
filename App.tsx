import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigator from './src/navigation/mainNavigator';


function DetailsScreen({navigation}: any) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.textContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi
        culpa ad deleniti veniam, veritatis asperiores exercitationem facilis
        laudantium, obcaecati enim dolor vel iste, aut necessitatibus debitis!
        Commodi, eligendi qui. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Iusto a rem voluptas quod, molestias quisquam minima
        ipsa beatae aliquid fugit error corrupti, provident sunt et expedita
        voluptates eligendi hic repellat!
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function SettingsScreen({navigation}: any) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.textContainer}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsam
        doloremque consectetur. Minima rem hic nemo ipsam. Assumenda aliquam,
        labore adipisci, reprehenderit modi libero id placeat, odit ipsum
        quisquam amet!
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    color: 'black',
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    padding: 20,
    color: 'black',
  },
  settingsInfo: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});

export default App;
