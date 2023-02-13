import React, {useState} from 'react';
import { Text, View, Image, Button, KeyboardAvoidingView } from "react-native";
import { COLORS } from "../../../util/constant";
import { styles } from './style';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Circle from '../../Components/Circle/Circle';
import Main from '../../Components/Main/Main';
import Script from '../../Components/Script/Script';
import CusModal from '../../Components/Modal/CusModal';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = (props) => {
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

    const [showModal, setShowModal] = useState(false);
    const [formValue, setFormValue] = useState(null);

    const handleEdit = (Transaction) => {
      const newData = arr.map((val) => {
        if(val.id == Transaction.id){
          val.description = Transaction.description;
          val.price = Transaction.price;
          return val;
        }
        return val;
      });
      setArr(newData);
      setShowModal(false);
    }

    return (
      <>
        <CusModal
          addFunc={handleEdit}
          showModal={showModal}
          setShowModal={() => {
            setShowModal(false);
          }}
          isEdit={true}
          formValues={formValue}
        />
        <View style={styles.mainContainer}>
          <Circle borderColor={COLORS.primary} />
        </View>
        <Tab.Navigator>
          <Tab.Screen
            name="Main"
            children={() => <Main setArr={setArr} {...props} />}
          />
          <Tab.Screen
            name="Script"
            children={() => (
              <Script
                arr={arr}
                setShowModal={setShowModal}
                setFormValue={setFormValue}
                {...props}
              />
            )}
          />
        </Tab.Navigator>
      </>
    );
}

export default HomeScreen;
