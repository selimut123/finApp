import React from 'react';
import { styles } from './style';
import { View, Text, Image } from 'react-native';

const Circle = (props) => {
    return (
      <View style={styles.container1}>
        <View style={[styles.circle, { borderColor: props.borderColor }]}>
          <View style={styles.innercircle}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>TOTAL SPEND:</Text>
              <Text style={styles.numText}>1.500 $</Text>
              <Image
                style={styles.chestImg}
                source={require("../../../assets/chest.png")}
              />
            </View>
          </View>
        </View>
        <Image style={styles.phonecatImg} source={require("../../../assets/phonecat.png")} />
      </View>
    );
}

export default Circle;
