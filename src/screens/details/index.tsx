import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {styles} from '../../styles';
import NavMenu from '../../components/organisms/navMenu';

const DetailsScreen = ({navigation}: any) => {
  const {width} = Dimensions.get('window');
  const imageHeight = width * 0.8;

  return (
    <View style={styles.homeContainer}>
      <NavMenu navigation={navigation} />
      <ScrollView style={styles.scrollContainer}>
        <View style={detailStyles.textContainer}>
          <Text style={detailStyles.textContainerText}>
            So they gave us this Assignment#4 ...
          </Text>
          <View style={detailStyles.quoteContainer}>
            <Text style={detailStyles.quoteContainerText}>
              "And I knew exactly what to do. But in a much more real sense, I
              had no idea what to do." {'\n'} -Michael Scott
            </Text>
            <Text style={detailStyles.quoteRef}>
              The Office US - S5 E14 Part 1
            </Text>
          </View>
        </View>
        <Image
          source={require('../../assets/MichaelGScott.jpg')}
          style={[detailStyles.image, {height: imageHeight}]}
        />
      </ScrollView>
    </View>
  );
};
const detailStyles = StyleSheet.create({
  image: {
    width: '80%',
    marginTop: 20,
    bottom: 0,
    alignSelf: 'center',
  },
  textContainer: {
    width: '100%',
  },
  textContainerText: {
    color: '#76ABAE',
    fontSize: 18,
    width: '100%',
    marginLeft: 10,
    marginBottom: 5,
  },
  quoteContainer: {
    color: '#31363F',
    fontSize: 16,
    backgroundColor: '#EEEEEEc4',
    padding: 11,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 11,
    alignContent: 'center',
    justifyContent: 'center',
  },
  quoteContainerText: {
    color: '#31363F',
    fontSize: 16,
    padding: 11,
  },
  quoteRef: {
    color: '#31363F',
    fontSize: 12,
    fontFamily: 'Roboto',
    textAlign: 'right',
  },
});
export default DetailsScreen;
