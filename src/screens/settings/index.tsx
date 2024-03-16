import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../styles';
import NavMenu from '../../components/molecules/navMenu';

const SettingsScreen = ({navigation}: any) => {
  return (
    <View style={styles.homeContainer}>
      <NavMenu navigation={navigation} />
      <Text style={styles.textContainer}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsam
        doloremque consectetur. Minima rem hic nemo ipsam. Assumenda aliquam,
        labore adipisci, reprehenderit modi libero id placeat, odit ipsum
        quisquam amet!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SettingsScreen;
