import React, {FC, useEffect, useState, useCallback} from 'react';
import { View, Text, Button } from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./style";
import PieChartSegment from './PieChartSegment';

const PieChart = ({size = 200, strokeWidth = 20, text, price, database, color}) => {
    const progress = useSharedValue(0);
    const [data, setData] = useState([]);
    const [startAngles, setStartAngles] = useState([]);
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    useFocusEffect(
      useCallback(() => {
        let angle = 0;
        const angles = [];
        database.forEach((item) => {
          angles.push(angle);
          angle += item.percent * 360;
        });
        setData(database);
        setStartAngles(angles);
        progress.value = 0;
        progress.value = withTiming(1, { duration: 1000 });
      }, [])
    );

    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={[styles.innerCircle, {backgroundColor: color}]}>
            <Text style={styles.innerTitle}>{text}</Text>
            <Text style={styles.innerTitle}>{price}$</Text>
          </View>
        </View>
        <View style={[{ width: size, height: size }, styles.rotate]}>
          <Svg viewBox={`0 0 ${size} ${size}`}>
            {data.map((item, index) => (
              <PieChartSegment
                key={`${item.color}-${index}`}
                center={center}
                radius={radius}
                circumference={circumference}
                angle={startAngles[index]}
                color={item.color}
                percent={item.percent}
                strokeWidth={strokeWidth}
                progress={progress}
              />
            ))}
          </Svg>
        </View>
        <View style={styles.container3}>
          {data.map((item, index) => (
            <View style={styles.row} key={index}>
              <View
                style={[styles.smallCircle, { backgroundColor: item.color }]}
              ></View>
              <Text>{item.description}</Text>
              <Text> {item.percent * 100}%</Text>
            </View>
          ))}
        </View>
      </View>
    );
}

export default PieChart;
