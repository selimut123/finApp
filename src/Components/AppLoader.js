import React from "react";
import {View, StyleSheet} from 'react-native';

import LottieView from "lottie-react-native";
import { COLORS } from "../../util/constant";

const AppLoader = () => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView source={require('../../assets/loading3.json')} autoPlay loop />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    }
});

export default AppLoader;