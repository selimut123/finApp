import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { COLORS } from '../../../util/constant';

import Card from '../../Components/Card/Card';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from 'react-native-gesture-handler';

const Summary = ({navigation, route}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.box}>
          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Stats");
              }}
            >
              <Icon name="keyboard-backspace" size={30} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.mainTitle}>MARCH, 2022</Text>
          <Text style={styles.historyTitle}>History Transaction</Text>
          <ScrollView>
            {route.params.paramKey.map((val, id) => (
              <Card value={val} key={id} disabled={true} />
            ))}
          </ScrollView>
          <View style={styles.subbox}>
            <Text style={styles.title2}>Total Spending: </Text>
            <Text style={styles.priceTitle}>
              {route.params.total.toFixed(1)} $
            </Text>
          </View>
        </View>
      </View>
    );
}

export default Summary;
