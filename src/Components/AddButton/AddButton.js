import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AddButton = ({onPress}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Icon name="plus" size={35} color={"#3D98F3"}/>
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default AddButton;
