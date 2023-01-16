import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const List = (props) => {
    return (
        <View>
            {props.arr.map((value, id) => (
                <Text style={styles.text} key={id}>- {value.description}: {value.price} $</Text>
            ))}
        </View>
    );
}

export default List;
