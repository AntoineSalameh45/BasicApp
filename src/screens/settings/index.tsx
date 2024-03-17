import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../../styles';
import NavMenu from '../../components/molecules/navMenu';
import BackButton from '../../components/atoms/backButton';

const SettingsScreen = ({navigation}: any) => {
  return (
    <View style={styles.homeContainer}>
      <NavMenu navigation={navigation} />
      <Text style={styles.textContainer}>
        Yo! Go ahead and drop your real name my lil chimichanga.
      </Text>
      <TextInput placeholder="lil chimichanga" style={styles.textInput} />
      <BackButton navigation={navigation} />
    </View>
  );
};

export default SettingsScreen;
