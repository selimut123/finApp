import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Card = props => {
    return (
      <View key={props.id} style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>{props.value.date}</Text>
          <Text style={{ color: props.value.color }}>{props.value.price} $</Text>
        </View>
        <Text>{props.value.description}</Text>
        {props.value.noEdit ? (
          <></>
        ) : (
          <View style={styles.icon}>
            <Icon name="square-edit-outline" size={20} />
          </View>
        )}
      </View>
    );
}

export default Card;
