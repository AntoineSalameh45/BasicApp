import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../../styles';

interface NavigationButtonProps {
  navigation: any;
  destination: string;
  buttonText: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  navigation,
  destination,
  buttonText,
}) => {
  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default NavigationButton;
