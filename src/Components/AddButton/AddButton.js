import React from 'react';
import { View, TouchableOpacity } from "react-native";
import { COLORS } from '../../../util/constant';
import { styles } from './style';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AddButton = ({onPress}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Icon name="plus" size={35} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default AddButton;
