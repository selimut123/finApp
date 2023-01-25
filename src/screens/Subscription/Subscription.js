import React, {useState} from "react";
import { View, Text } from "react-native";
import { styles } from './style';

import PieChart from "../../Components/PieChart/PieChart";
import Card from "../../Components/Card/Card";
import AddButton from "../../Components/AddButton/AddButton";

function Subscription(){
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

    const [data, setData] = useState([
      { color: "#DC24FF", percent: 0.25, description: "Doorpass" },
      { color: "#14A1FF", percent: 0.5, description: "Chegg" },
      { color: "#14FF43", percent: 0.25, description: "Amazon" },
    ]);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.chartContainer}>
          <PieChart
            text={"SUBS USED"}
            price={100}
            database={data}
            color={"#C4C1C1"}
          />
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.title}>MONTHLY SUBSCRIPTION</Text>
          {arr.map((val, id) => (
            <Card value={val} key={id} />
          ))}
        </View>
        <AddButton />
      </View>
    );
}

export default Subscription;
