import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/cat2.png")} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
}

export default CustomDrawer;


const styles = StyleSheet.create({
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
});