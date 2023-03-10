import React, {useState} from 'react';
import { View, Text } from "react-native";
import { styles } from './style';
import { getCurrentDate } from "../../../util/function";

import PieChart from '../../Components/PieChart/PieChart';
import CardBorder from '../../Components/CardBorder/CardBorder';
import AddButton from '../../Components/AddButton/AddButton';
import CusModal from '../../Components/Modal/CusModal';
import { ScrollView } from 'react-native-gesture-handler';

const Income = () => {
    const [data, setData] = useState([
      {
        id: 1,
        description: "Allowance",
        price: 2250,
        date: "Tuesday, March 30, 2021",
      },
    ]);

    const [showModal, setShowModal] = useState(false);

    const addIncome = (Income) => {
      Income.id = Math.random.toString();
      Income.date = getCurrentDate();
      Income.price = parseFloat(Income.price);
      setData((currIncs) => {
        return [Income, ...currIncs];
      });
      setShowModal(false);
    }

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <CusModal
            addFunc={addIncome}
            setShowModal={() => {
              setShowModal(false);
            }}
            showModal={showModal}
          />
          <View style={styles.chartContainer}>
            <PieChart text={"Income"} database={data} color={"#85FFA6"} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>INCOME</Text>
            <View style={styles.cardContainer}>
              {data.map((val, index) => (
                <CardBorder
                  key={index}
                  title={val.description}
                  price={"+" + val.price}
                  color={"#00FF44"}
                />
              ))}
            </View>
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

export default Income;
