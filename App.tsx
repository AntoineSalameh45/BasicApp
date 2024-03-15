import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}: any) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.welcomeMessage}>
        Hey there, little chimichanga! Welcome to this mind-blowingly BasicApp.
        It's so basic, it makes vanilla ice cream look like a flavor explosion.
      </Text>
      <Text style={styles.settingsInfo}>
        Feel like spicing things up? Go ahead, check out the settings. Maybe
        you'll find something cool there. Or not. Whatever floats your taco.
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Settings')}
                title="Settings"
              />
            ),
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
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
  settingsIcon: {
    fontSize: 24, // Adjust the size as needed
    marginRight: 10, // Add some margin to separate the icon from the text
    color: 'black', // Adjust the color of the icon
  },
});

export default App;
