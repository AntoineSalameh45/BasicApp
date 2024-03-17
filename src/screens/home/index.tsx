import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../../styles';
import NavMenu from '../../components/molecules/navMenu';
import NavigationButton from '../../components/atoms/navigationButton';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.homeContainer}>
      <NavMenu navigation={navigation} />
      <Text style={styles.welcomeMessage}>
        Hey there, little chimichanga! Welcome to this mind-blowingly BasicApp.
        It's so basic, it makes vanilla ice cream look like a flavor explosion.
      </Text>
      <Image
        source={require('../../assets/1710585780411.png')}
        style={styles.deadpoolImg}
      />
      <Text style={styles.settingsInfo}>
        Feel like spicing things up? Go ahead, check out the settings. Maybe
        you'll find something cool there. Or not. Whatever floats your taco.
      </Text>
      <View style={styles.buttonContainer}>
        <NavigationButton
          navigation={navigation}
          destination="Details"
          buttonText="Go to details!"
        />
        <NavigationButton
          navigation={navigation}
          destination="Settings"
          buttonText="⚙ Settings"
        />
      </View>
    </View>
  );
};
export default Home;
