import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style';

import Circle from '../../Components/Circle/Circle';
import List from '../../Components/List/List';
import { ScrollView } from 'react-native-gesture-handler';

const CashFlow = ({navigation}) => {
    const [Income, setIncome] = useState([{
        "description": "Allowance",
        "price": 2250,
    }]);
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

    const [arr, setArr] = useState([
      {
        description: "Allowance",
        price: 2250,
      },
      {
        description: "Rent",
        price: 1290,
      },
      {
        description: "Daily Expense",
        price: 700,
      },
      {
        description: "1 BNB Crypto",
        price: 630,
      },
    ]);
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <Circle borderColor="#07FFAA" data={arr}/>
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
          <View style={styles.container2}>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Stats")}}>
              <Text style={styles.buttonText}>STATS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
}

export default CashFlow;
