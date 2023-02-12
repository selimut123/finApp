import React, { useState } from 'react';
import { View, Text, ScrollView } from "react-native";
import { styles } from './style';
import { getCurrentDate } from '../../../util/function';

import PieChart from '../../Components/PieChart/PieChart';
import CardBorder from '../../Components/CardBorder/CardBorder';
import AddButton from '../../Components/AddButton/AddButton';
import CusModal from '../../Components/Modal/CusModal';

const Expense = () => {
    const [data, setData] = useState([
      {
        id: 1,
        description: "Rent",
        price: 1290,
        date: "Tuesday, March 30, 2021",
      },
    ]);

    const [showModal, setShowModal] = useState(false);

    const addExpense = (Expense) => {
      Expense.id = Math.random.toString();
      Expense.date = getCurrentDate();
      Expense.price = parseFloat(Expense.price);
      setData((currExps) => {
        return [Expense, ...currExps];
      });
      setShowModal(false);
    }

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <CusModal
            addFunc={addExpense}
            setShowModal={() => {
              setShowModal(false);
            }}
            showModal={showModal}
          />
          <View style={styles.chartContainer}>
            <PieChart text={"Expense"} database={data} color={"#FF92A4"} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>EXPENSE</Text>
            <View style={styles.cardContainer}>
              {data.map((val, index) => (
                <CardBorder key={index} title={val.description} price={"-" + val.price} color={"#FF0932"} />
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

export default Expense;
