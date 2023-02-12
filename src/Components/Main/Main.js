import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { getCurrentDate } from '../../../util/function';

import Form from '../Form/Form';

const Main = ({setArr}) => {
    const addTrans = (Transaction) => {
        Transaction.id = Math.random.toString();
        Transaction.date = getCurrentDate();
        setArr((currTrans) => {
            return [Transaction, ...currTrans];
        });
    }

    return (
      <View style={styles.mainContainer}>
        <Form addFunc={addTrans} />
      </View>
    );
}

export default Main;
