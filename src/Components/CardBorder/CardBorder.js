import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CardBorder = ({title, price, color}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.price, {color: color}]}>{price}$</Text>
        </View>
        <Text>description</Text>
        <View style={styles.icon}>
          <Icon name="square-edit-outline" size={20} />
        </View>
      </View>
    );
}

export default CardBorder;
