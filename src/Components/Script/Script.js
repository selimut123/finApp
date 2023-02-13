import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Card from '../Card/Card';

const Script = ({navigation, isTransaction, arr, setShowModal, setFormValue}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container1}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Monthly Transaction</Text>
            {isTransaction ? (
              <></>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("TransactionList")}
              >
                <Icon name="clipboard-list-outline" size={40} />
              </TouchableOpacity>
            )}
          </View>
          {isTransaction
            ? arr.map((val, id) => (
                <Card value={val} key={id} onPress={() => setShowModal(true)} />
              ))
            : arr
                .slice(0, 3)
                .map((val, id) => (
                  <Card
                    value={val}
                    key={id}
                    onPress={() => {
                      setShowModal(true);
                      setFormValue(val);
                    }}
                  />
                ))}
        </View>
      </View>
    );
}

export default Script;
