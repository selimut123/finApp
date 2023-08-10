import React, {useState} from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { styles } from './style';
import {LineChart} from "react-native-chart-kit";
import { COLORS, screenWidth } from '../../../util/constant';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stats = ({navigation}) => {
    
    const [sum, setSum] = useState([
      {
        date: "March, 2022",
        price: 200,
      },
      {
        date: "April, 2022",
        price: 300,
      },
      {
        date: "May, 2022",
        price: 250,
      },
    ]);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>AVG Spending: </Text>
          <Text style={styles.totalSave}>750 $</Text>
        </View>
        <View style={styles.chartContainer}>
          <LineChart
            data={{
              labels: ["March, 2022", "April, 2022", "May, 2022"],
              datasets: [
                {
                  data: [200, 300, 250],
                },
              ],
            }}
            width={screenWidth - 50} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              decimalPlaces: 2,
              backgroundGradientFrom: COLORS.background,
              backgroundGradientTo: COLORS.background,
              color: (opacity = 0) => COLORS.primary,
              labelColor: (opacity = 1) => COLORS.white,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false, // optional
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={styles.sumContainer}>
          <Text style={styles.sumTitle}>Monthly Summary</Text>
          {sum.map((val, id) => (
            <TouchableOpacity
              key={id}
              onPress={() => {
                navigation.navigate("Summary");
              }}
            >
              <View style={styles.monContainer}>
                <Text style={{ fontSize: 20, color: COLORS.white }}>
                  {val.date}
                </Text>
                <Text style={styles.priceText}>{val.price} $</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
}

export default Stats;
