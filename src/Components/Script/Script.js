import React, {useState} from 'react';
import { View, Text } from "react-native";
import { styles } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Card from '../Card/Card';

const Script = ({navigation, isTransaction}) => {
    const [arr, setArr] = useState([
      {
        id: 1,
        description: "Wingstop purchased",
        price: "24.14",
        date: "Tuesday, March 30, 2021",
      },
      {
        id: 2,
        description: "Wingstop purchased",
        price: "24.1",
        date: "Tuesday, March 30, 2021",
      },
      {
        id: 3,
        description: "Wingstop purchased",
        price: "24.14",
        date: "Tuesday, March 30, 2021",
      },
    ]);
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
          {arr.map((val, id) => (
            <Card value={val} key={id}/>
          ))}
        </View>
      </View>
    );
}

export default Script;
