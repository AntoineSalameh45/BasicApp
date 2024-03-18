import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {styles} from '../../styles';
import NavMenu from '../../components/organisms/navMenu';
import {useNameContext} from '../../components/molecules/nameContext';
import BackButton from '../../components/atoms/backButton';

const SettingsScreen = ({navigation}: any) => {
  const {setName} = useNameContext();
  const [newName, setNewName] = useState('');

  const handleSave = () => {
    setName(newName);
    Alert.alert(
      'Name Saved!',
      'Your name has been noted, chimichanga!',
      [
        {
          text: 'Go Back to Home',
          onPress: () => navigation.navigate('Home'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
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
