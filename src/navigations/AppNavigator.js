import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../util/constant';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenLock from '../screens/ScreenLock/ScreenLock';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TransactionList from '../screens/TransactionList/TransactionList';
import CashFlow from '../screens/CashFlow/CashFlow';
import CustomDrawer from '../Components/customDrawer';

const Drawer = createDrawerNavigator();

function stackNavigator(){
    return (
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            title: "",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            drawerIcon: (props) => {},
            headerTintColor: "#000",
            headerTitleAlign: "center",
            headerRight: () => (
              <View
                style={{
                  backgroundColor: COLORS.secondary,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  marginRight: 15,
                  alignItems: "center",
                  width: 180,
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  elevation: 5,
                }}
              >
                <Text style={{ fontSize: 20 }}>BECKO FINANCE</Text>
              </View>
            ),
          }}
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          {/* <Drawer.Screen
            name="ScreenLock"
            component={ScreenLock}
            options={{
              headerShown: false,
              drawerItemStyle: { display: 'none'},
            }}
          /> */}
          <Drawer.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Home",
              headerTitle: "",
            }}
          />
          <Drawer.Screen
            name="TransactionList"
            component={TransactionList}
            options={{
              title: "Monthly Transaction",
              headerTitle: "",
            }}
          />
          <Drawer.Screen
            name="CashFlow"
            component={CashFlow}
            options={{
              title: "CashFlow",
              headerTitle: "",
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default stackNavigator;