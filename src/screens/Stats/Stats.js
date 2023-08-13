import React, {useEffect, useState} from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { styles } from './style';
import { COLORS, screenWidth } from '../../../util/constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../../util/api';
import LineChart from '../../Components/LineChart/LineChart';
import moment from 'moment';

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

    const [arr, setArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [chartValue, setChartValue] = useState({
      labels: [""],
      datasets: [
        {
          data: [0]
        },
      ],
    });

    const getReports = async () => {
      try{
        setIsLoading(true);
        const response = await api.get('/report/');
        const responseData = response.data;
        setArr(responseData);
        setIsLoading(false);
      }catch(err){
        console.log(err);
        return;
      }
    }

    useEffect(() => {
      getReports();
    }, []);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>AVG Spending: </Text>
          <Text style={styles.totalSave}>750 $</Text>
        </View>
        <View>
          <LineChart/>
        </View>
        {/* {
          isLoading ? <></> : 
          <LineChart
            data={{
              labels: ["", arr.map((val) => moment(val._id).format("MMM YYYY"))],
              datasets: [
                {
                  data: [0, arr.map((val) => {
                    let total = 0;
                    // val.expenses.map((val) => {
                    //   total += parseFloat(val.price);
                    // });
                    return total;
                  })],
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
        } */}
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
