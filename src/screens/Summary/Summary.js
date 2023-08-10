import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { COLORS } from '../../../util/constant';

import Card from '../../Components/Card/Card';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Summary = ({navigation}) => {
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
      {
        id: 4,
        description: "Wingstop purchased",
        price: "24.14",
        date: "Tuesday, March 30, 2021",
      },
    ]);


    return (
      <View style={styles.mainContainer}>
        <View style={styles.box}>
          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Stats");
              }}
            >
              <Icon name="keyboard-backspace" size={30} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.mainTitle}>MARCH, 2022</Text>
          <Text style={styles.historyTitle}>History Transaction</Text>
          <View>
            {arr.map((val, id) => (
              <Card
                value={val}
                key={id}
                disabled={true}
              />
            ))}
          </View>
          <View style={styles.subbox}>
            <Text style={styles.title2}>Total Spending: </Text>
            <Text style={styles.priceTitle}>200 $</Text>
          </View>
        </View>
      </View>
    );
}

export default Summary;
