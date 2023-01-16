import React from 'react';
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
    return (
      <>
        <View style={styles.mainContainer}>
          <Circle borderColor={COLORS.primary} />
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Script" component={Script} />
        </Tab.Navigator>
      </>
    );
}

export default HomeScreen;
