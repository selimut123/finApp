import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Card from '../../Components/Card/Card';
import AddButton from '../../Components/AddButton/AddButton';

const Bank = () => {
    const [arr, setArr] = useState([
      {
        id: 1,
        description: "Monthly Income",
        price: "2250",
        date: "March 30, 2021",
        noEdit: true,
        color: "#FF0932",
      },
      {
        id: 2,
        description: "Monthly CashFlow",
        price: "250",
        date: "March 30, 2021",
        noEdit: true,
        color: "#00FF44",
      },
      {
        id: 3,
        description: "School Expense",
        price: "11000",
        date: "March 30, 2021",
        color: "#FF0932",
      },
    ]);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>TOTAL MONEY</Text>
        <View style={styles.amountContainer}>
          <Image
            style={styles.chestImg}
            source={require("../../../assets/chest.png")}
          />
          <Text style={styles.amountTitle}>17.000 $</Text>
          <View>
            <TouchableOpacity>
              <View style={styles.button}>
                <Icon name="plus" size={20} color={"#707070"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>LOGS</Text>
          {arr.map((val, index) => (
            <Card value={val} key={index} />
          ))}
        </View>
        <AddButton />
        <View style={styles.catContainer}>
          <Image
            source={require("../../../assets/phonecat.png")}
          />
        </View>
      </View>
    );
}

export default Bank;
