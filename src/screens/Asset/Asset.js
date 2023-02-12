import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { getCurrentDate } from '../../../util/function';

import PieChart from '../../Components/PieChart/PieChart';
import CardBorder from '../../Components/CardBorder/CardBorder';
import { ScrollView } from 'react-native-gesture-handler';
import AddButton from '../../Components/AddButton/AddButton';
import CusModal from '../../Components/Modal/CusModal';

const Asset = () => {
    const [data, setData] = useState([
      {
        id: 1,
        description: "Crypto",
        price: 1290,
        date: "Tuesday, March 30, 2021",
      },
    ]);

    const[showModal, setShowModal] = useState(false);

    const addAsset = (Asset) => {
      Asset.id = Math.random.toString();
      Asset.date = getCurrentDate();
      Asset.price = parseFloat(Asset.price);
      setData((currAss) => {
        return [Asset, ...currAss];
      });
      setShowModal(false);
    }

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <CusModal 
            addFunc={addAsset}
            setShowModal={() => {setShowModal(false)}}
            showModal={showModal}
          />
          <View style={styles.chartContainer}>
            <PieChart
              text={"Assets"}
              database={data}
              color={"#85FFA6"}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>ASSETS</Text>
            <View style={styles.cardContainer}>
              {data.map((val, index) => (
                <CardBorder
                  key={index}
                  title={val.description}
                  price={val.price}
                  color={"#00FF44"}
                />
              ))}
            </View>
          </View>
        </ScrollView>
        <AddButton onPress={() => {setShowModal(true)}}/>
      </View>
    );
}

export default Asset;
