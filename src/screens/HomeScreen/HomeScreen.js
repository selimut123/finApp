import React, {useState} from 'react';
import { Text, View, Image, Button, KeyboardAvoidingView } from "react-native";
import { COLORS } from "../../../util/constant";
import { styles } from './style';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Circle from '../../Components/Circle/Circle';
import Main from '../../Components/Main/Main';
import Script from '../../Components/Script/Script';
import { ScrollView } from 'react-native-gesture-handler';

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

    return (
      <>
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
            children={() => <Script arr={arr} {...props} />}
          />
        </Tab.Navigator>
      </>
    );
}

export default HomeScreen;
