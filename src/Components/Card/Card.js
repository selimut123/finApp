import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style';
import { COLORS } from '../../../util/constant';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Card = (props) => {
    return (
      <View>
        {props.value.noEdit ? (
          <></>
        ) : (
          <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
            <View key={props.id} style={styles.container}>
              <View style={styles.row}>
                <Text style={styles.text}>{props.value.date}</Text>
                <Text style={{ color: COLORS.white }}>
                  {props.value.price} $
                </Text>
              </View>
              <Text style={{ color: COLORS.white }}>
                {props.value.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
}

export default Card;
