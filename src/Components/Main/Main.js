import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import Form from '../Form/Form';

const Main = () => {
    return (
        <View style={styles.mainContainer}>
            <Form />
        </View>
    );
}

export default Main;
