import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style';
import { COLORS } from '../../../util/constant';
import moment from 'moment';

const Card = (props) => {
    return (
      <View>
        {props.value.noEdit ? (
          <></>
        ) : (
          <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
            <View key={props.id} style={styles.container}>
              <View style={styles.row}>
                <Text style={styles.text}>{moment(props.value.date).format('dddd, DD MMM YYYY')}</Text>
                <Text style={{ color: COLORS.white }}>
                  {parseFloat(props.value.price).toFixed(1)} $
                </Text>
              </View>
              <Text style={{ color: COLORS.yellow }}>
                {props.value.description} 
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
}

export default Card;
