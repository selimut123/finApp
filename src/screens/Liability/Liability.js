import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { getCurrentDate } from '../../../util/function';

import PieChart from '../../Components/PieChart/PieChart';
import CardBorder from '../../Components/CardBorder/CardBorder';
import AddButton from "../../Components/AddButton/AddButton";
import { ScrollView } from 'react-native-gesture-handler';
import CusModal from '../../Components/Modal/CusModal';

const Liability = () => {
    const [data, setData] = useState([
      {
        id: 1,
        description: "Loan",
        price: 1000,
        date: "Tuesday, March 30, 2021",
      },
    ]);

    const [showModal, setShowModal] = useState(false);

    const addLiability = (Liability) => {
      Liability.id = Math.random.toString();
      Liability.date = getCurrentDate();
      Liability.price = parseFloat(Liability.price);
      setData((currLias) => {
        return [Liability, ...currLias];
      });
      setShowModal(false);
    }

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <CusModal 
            setShowModal={() => {setShowModal(false)}}
            showModal={showModal}
            addFunc={addLiability}
          />
          <View style={styles.chartContainer}>
            <PieChart
              text={"Liability"}
              database={data}
              color={"#FF92A4"}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>LIABILITY</Text>
            <View style={styles.cardContainer}>
              {data.map((val, index) => (
                <CardBorder
                  key={index}
                  title={val.description}
                  price={val.price}
                  color={"#FF0932"}
                />
              ))}
            </View>
          </View>
        </ScrollView>
        <AddButton onPress={() => {setShowModal(true)}}/>
      </View>
    );
}

export default Liability;
