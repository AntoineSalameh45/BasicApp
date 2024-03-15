import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { styles } from './styles';

const DetailsScreen = ({navigation}: any) => {
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
export default DetailsScreen;