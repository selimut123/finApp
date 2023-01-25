import React, {useState} from 'react';
import { View, Text } from "react-native";
import { styles } from './style';

import PieChart from '../../Components/PieChart/PieChart';
import CardBorder from '../../Components/CardBorder/CardBorder';
import AddButton from '../../Components/AddButton/AddButton';

const Income = () => {
    const [data, setData] = useState([
      {
        color: "#14A1FF",
        percent: 1,
        description: "Allowance",
      },
    ]);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.chartContainer}>
          <PieChart
            text={"Income"}
            price={"+2250"}
            database={data}
            color={"#85FFA6"}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>INCOME</Text>
          <View style={styles.cardContainer}>
            <CardBorder title={"Income"} price={"+2250"} color={"#00FF44"} />
          </View>
        </View>
        <AddButton/>
      </View>
    );
}

export default Income;
