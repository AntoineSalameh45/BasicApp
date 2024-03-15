import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { styles } from './styles';

const SettingsScreen = ({navigation}: any) => {
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
export default SettingsScreen;