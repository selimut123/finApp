import React, {useEffect, useState, useCallback} from 'react';
import { View, Text, ScrollView, RefreshControl} from 'react-native';
import { styles } from './style';
import { COLORS } from '../../../util/constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../../util/api';
import LineChart from '../../Components/LineChart/LineChart';
import moment from 'moment';
import AppLoader from '../../Components/AppLoader';

const Stats = ({navigation}) => {
    const [arr, setArr] = useState([]);
    const [arr2, setArr2] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [avg, setAvg] = useState(0);
    
    const onRefresh = useCallback(async () => {
      setRefreshing(true);
      await getReports();
      setTimeout(() => {
        setRefreshing(false);
      }, 0);
    }, []);

    const getReports = async () => {
      try{
        setIsLoading(true);
        const response = await api.get('/report/');
        const responseData = response.data;
        let all = 0;
        setArr(
          [...responseData]
            .map((entry) => {
              let total = 0;
              entry.expenses.map((exp) => {
                total += parseFloat(exp.price);
              });
              all += total;
              return {
                date: entry._id,
                total: total,
              };
            })
        );
        setArr2(
          [...responseData]
          .sort((a, b) => a.date > b.date ? 1 : -1)
          .map((entry) => {
            let total = 0;
            entry.expenses.map((exp) => {
              total += parseFloat(exp.price);
            });

            return {
              date: entry._id,
              total: total,
              expenses: entry.expenses,
            };
          })
        );
        setAvg(all / (responseData.length));
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
      <>
        {isLoading ? <AppLoader/> : <></>}
        <View style={styles.mainContainer}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>AVG Spending: </Text>
              <Text style={styles.totalSave}>{avg.toFixed(1)} $</Text>
            </View>
            <View>
              <LineChart data={arr} />
            </View>
            <View style={styles.sumContainer}>
              <Text style={styles.sumTitle}>Monthly Summary</Text>
              {arr2.map((val, id) => (
                <TouchableOpacity
                  key={id}
                  onPress={() => {
                    navigation.navigate("Summary", {
                      paramKey: val.expenses || null,
                      total: val.total || null,
                    });
                  }}
                >
                  <View style={styles.monContainer}>
                    <Text style={{ fontSize: 20, color: COLORS.white }}>
                      {moment(val.date).format("MMMM, YYYY")}
                    </Text>
                    <Text style={styles.priceText}>
                      {val.total.toFixed(1)} $
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </>
    );
}

export default Stats;
