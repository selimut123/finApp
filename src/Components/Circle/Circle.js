import React, { useCallback, useState } from "react";
import { styles } from './style';
import { View, Text, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Circle = (props) => {

    const [totalVal, setTotalVal] = useState();

    useFocusEffect(
      useCallback(() => {
        let total = 0;
        props.data.map((val) => {
          total += parseFloat(val.price);
        });
        setTotalVal(total);
      }, [props.data])
    );

    return (
      <View style={styles.container1}>
        <View style={[styles.circle, { borderColor: props.borderColor }]}>
          <View style={styles.innercircle}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>TOTAL SPEND:</Text>
              <Text style={styles.numText}>
                {parseFloat(totalVal).toFixed(2)} $
              </Text>
              <Image
                style={styles.chestImg}
                source={require("../../../assets/chest.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={styles.phonecatImg}
          source={require("../../../assets/phonecat.png")}
        />
      </View>
    );
}

export default Circle;
