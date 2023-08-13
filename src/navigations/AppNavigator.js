import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../util/constant';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenLock from '../screens/ScreenLock/ScreenLock';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TransactionList from '../screens/TransactionList/TransactionList';
// import CashFlow from '../screens/CashFlow/CashFlow';
import Stats from '../screens/Stats/Stats';
import Summary from '../screens/Summary/Summary';
import Subscription from '../screens/Subscription/Subscription';
import Income from '../screens/Income/Income';
import Expense from '../screens/Expense/Expense';
import Asset from '../screens/Asset/Asset';  
import Liability from '../screens/Liability/Liability';
import Bank from '../screens/Bank/Bank';
import CustomDrawer from '../Components/customDrawer';

const Drawer = createDrawerNavigator();

function stackNavigator(){
    return (
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            title: "",
            headerStyle: {
              backgroundColor: COLORS.onprimary,
            },
            drawerIcon: (props) => {},
            drawerInactiveTintColor: COLORS.white,
            headerTintColor: COLORS.white,
            headerTitleAlign: "center",
            headerRight: () => (
              <View
                style={{
                  backgroundColor: COLORS.primary,
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
              title: "Transaction History",
              headerTitle: "",
            }}
          />
          {/* <Drawer.Screen
            name="CashFlow"
            component={CashFlow}
            options={{
              title: "CashFlow",
              headerTitle: "",
            }}
          /> */}
          <Drawer.Screen
            name="Stats"
            component={Stats}
            options={{
              title: "Spending",
              headerTitle: "",
            }}
          />
          <Drawer.Screen
            name="Summary"
            component={Summary}
            options={{
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="Subscription"
            component={Subscription}
            options={{
              title: "Monthly Subscription",
              headerTitle: "",
            }}
          />
          {/* <Drawer.Screen
            name="Income"
            component={Income}
            options={{
              title: "Income Page",
              headerTitle: "",
            }}
          />
          <Drawer.Screen
            name="Expense"
            component={Expense}
            options={{
              title: "Expense Page",
              headerTitle: "",
            }}
          />
          <Drawer.Screen
            name="Asset"
            component={Asset}
            options={{
              title: "Asset Page",
              headerTitle: "",
            }}
          />
          <Drawer.Screen
            name="Liability"
            component={Liability}
            options={{
              title: "Liability Page",
              headerTitle: "",
            }}
          />
          <Drawer.Screen
            name="Bank"
            component={Bank}
            options={{
              title: "Bank Page",
              headerTitle: "",
            }}
          /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default stackNavigator;