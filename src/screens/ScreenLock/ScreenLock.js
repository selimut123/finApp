import React from 'react';
import { Text, View, Image} from "react-native";
import { styles } from './style';
import { numbers } from '../../../util/constant';

const ScreenLock = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/catpass.png')}/>
      <View style={styles.codeContainer}>
        <View style={styles.code}></View>
        <View style={styles.code}></View>
        <View style={styles.code}></View>
        <View style={styles.code}></View>
      </View>
      <View style={styles.keypadContainer}>
        {numbers.map((num, id) => {
          return( 
          <View key={id} style={styles.keypad}>
            <Text style={styles.keypadText}>{num}</Text>
          </View>
          );
        })}
      </View>
    </View>
  );
}

export default ScreenLock;
