import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from '../../styles';
import NavMenu from '../../components/molecules/navMenu';
import {useNameContext} from '../../components/molecules/nameContext';
import BackButton from '../../components/atoms/backButton';

const SettingsScreen = ({navigation}: any) => {
  const {setName} = useNameContext();
  const [newName, setNewName] = useState('');

  const handleSave = () => {
    setName(newName);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.homeContainer}>
      <NavMenu navigation={navigation} />
      <Text style={styles.textContainer}>
        Yo! Go ahead and drop your real name my lil chimichanga.
      </Text>
      <TextInput
        placeholder="chimichanga"
        style={styles.textInput}
        onChangeText={setNewName}
      />
      <View style={styles.buttonContainer}>
        <BackButton navigation={navigation} />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
