import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../styles';

const Home = ({navigation}: any) => {
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.buttonText}>Go to details!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
