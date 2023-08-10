import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image} from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Card from '../Card/Card';
import { COLORS } from '../../../util/constant';

const Script = ({navigation, isTransaction, arr, setShowModal, setFormValue, title}) => {
    return (
      <View
        style={[
          styles.mainContainer,
          {
            backgroundColor: isTransaction
              ? COLORS.background
              : COLORS.onprimary,
          },
        ]}
      >
        <View style={styles.container1}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            {isTransaction ? (
              <></>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("TransactionList")}
              >
                <Image source={require("../../../assets/finance_17.png")} />
                {/* <Icon name="clipboard-list-outline" size={40} color={"#FFF"} /> */}
              </TouchableOpacity>
            )}
          </View>
          {isTransaction
            ? arr.map((val, id) => (
                <Card
                  value={val}
                  key={id}
                  onPress={() => {
                    setShowModal(true);
                    setFormValue(val);
                  }}
                />
              ))
            : arr.slice(0, 3).map((val, id) => (
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
