import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

import List from "../../Components/List/List";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Summary = ({navigation}) => {
    const [Income, setIncome] = useState([
      {
        description: "Allowance",
        price: 2250,
      },
    ]);
    const [Expense, setExpense] = useState([
      {
        description: "Rent",
        price: 1290,
      },
      {
        description: "Daily Expense",
        price: 700,
      },
    ]);
    const [Assets, setAssets] = useState([
      {
        description: "1 BNB Crypto",
        price: 630,
      },
    ]);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.box}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => {navigation.navigate("Stats")}}>
              <Icon name="keyboard-backspace" size={30} />
            </TouchableOpacity>
          </View>
          <Text style={styles.mainTitle}>MARCH, 2022</Text>

          <View style={styles.subbox}>
            <Text style={styles.title2}>Total Profit</Text>
            <Text style={styles.priceTitle}>+ 200 $</Text>
          </View>

          <View style={styles.container1}>
            <View>
              <Text style={[styles.title, { borderBottomWidth: 1 }]}>
                Income Statement
              </Text>
              <Text style={styles.title}>Income</Text>
              <List arr={Income} />
              <Text style={styles.title}>Expense</Text>
              <List arr={Expense} />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={[styles.title, { borderBottomWidth: 1 }]}>
                Balance Sheet
              </Text>
              <Text style={styles.title}>Assets</Text>
              <List arr={Assets} />
              <Text style={styles.title}>Liability</Text>
            </View>
          </View>
        </View>
      </View>
    );
}

export default Summary;
