import React, {useState} from "react";
import { View, Text} from "react-native";
import { styles } from './style';
import { getCurrentDate } from "../../../util/function";

import PieChart from "../../Components/PieChart/PieChart";
import Card from "../../Components/Card/Card";
import AddButton from "../../Components/AddButton/AddButton";
import CusModal from "../../Components/Modal/CusModal";
import { ScrollView } from "react-native-gesture-handler";

function Subscription(){
    const [arr, setArr] = useState([
      {
        id: 1,
        description: "Wingstop",
        price: 25,
        date: "Tuesday, March 30, 2021",
      },
      {
        id: 2,
        description: "Wingstop",
        price: 50,
        date: "Tuesday, March 30, 2021",
      },
      {
        id: 3,
        description: "Wingstop",
        price: 25,
        date: "Tuesday, March 30, 2021",
      },
      {
        id: 4,
        description: "Chegg",
        price: 12,
        date: "Tuesday, March 30, 2021",
      },
    ]);

    const [showModal, setShowModal] = useState(false);

    const addSubs = (Subscription) => {
      Subscription.id = Math.random.toString();
      Subscription.date = getCurrentDate();
      Subscription.price = parseFloat(Subscription.price);
      setArr((currSubs) => {
        return [Subscription, ...currSubs];
      });
      setShowModal(false);
    };

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <CusModal
            addFunc={addSubs}
            setShowModal={() => {
              setShowModal(false);
            }}
            showModal={showModal}
          />

          <View style={styles.chartContainer}>
            <PieChart text={"SUBS USED"} database={arr} color={"#C4C1C1"} />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.title}>MONTHLY SUBSCRIPTION</Text>
            {arr.map((val, id) => (
              <Card value={val} key={id} />
            ))}
          </View>
        </ScrollView>
        <AddButton
          onPress={() => {
            setShowModal(true);
          }}
        />
      </View>
    );
}

export default Subscription;
