import React, { useEffect, useState, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import Svg, { Path, G, Line, Text as SvgText, Circle } from "react-native-svg";
import { COLORS, screenWidth } from "../../../util/constant";
import moment from "moment";
import { styles } from "./style";

const LineChart = ({data, containerHeight=280}) => {
    const margin = {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50,
    }
    const padding_from_screenBorder = 20;

    const x_axis_x1_point = margin.left;
    const x_axis_y1_point = containerHeight - margin.bottom;
    const x_axis_x2_point = screenWidth - padding_from_screenBorder;
    const x_axis_y2_point = containerHeight - margin.bottom;
    const x_axis_actual_width = screenWidth - margin.left - padding_from_screenBorder;
    const gap_between_x_axis_ticks = x_axis_actual_width / (data.length - 1);

    const y_axis_x1_point = margin.left;
    const y_axis_y1_point = padding_from_screenBorder;
    const y_axis_x2_point = margin.left;
    const y_axis_y2_point = containerHeight - margin.bottom;

    const y_min_value = 0;
    const y_max_value = Math.max.apply(
      Math,
      data.map((item) => parseFloat(item.total))
    );
    const gapBetweenYAxisValues = (y_max_value - y_min_value) / (data.length - 2);
    const y_axis_actual_height = y_axis_y2_point - y_axis_y1_point;
    const gap_between_y_axis_ticks =
      (y_axis_actual_height - y_min_value) / (data.length - 1);
    const yAxisLabels = data.map((item, index) => {
      if (index === 0) {
        return y_min_value;
      } else {
        return y_min_value + gapBetweenYAxisValues * index;
      }
    });
    const animated_x_axis_width = useRef(
        new Animated.Value(x_axis_x1_point),
    ).current;
    const animated_y_axis_width = useRef(
        new Animated.Value(y_axis_y2_point),
    ).current;
    const animated_circle_radius = useRef(new Animated.Value(0)).current;
    const animated_ticks_label_opacity = useRef(new Animated.Value(0)).current;
    const animated_path_ref = useRef(null);
    const animated_path_length = useRef(new Animated.Value(0)).current;
    const animated_path_opacity = useRef(new Animated.Value(0)).current;

    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const AnimatedLine = Animated.createAnimatedComponent(Line);
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvgText = Animated.createAnimatedComponent(SvgText);
    const AnimatedPath = Animated.createAnimatedComponent(Path);

    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
      start_x_y_axis_animation();
      start_axis_circle_animation();
      start_x_y_ticks_labels_aniamtion();
    }, []);

    useEffect(() => {
      animated_path_length.setValue(pathLength);
      
      Animated.timing(animated_path_length, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
      Animated.timing(animated_path_opacity, {
        toValue: 1,
        delay: 100,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    }, [pathLength])

    const start_axis_circle_animation = () => {
        Animated.timing(animated_circle_radius, {
          toValue: 4,
          duration: 1500,
          useNativeDriver: true,
        }).start();
    }
    const start_x_y_axis_animation = () => {
        Animated.timing(animated_x_axis_width, {
            toValue: x_axis_x2_point,
            duration: 1500,
            delay: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(animated_y_axis_width, {
          toValue: y_axis_y1_point,
          duration: 1500,
          delay: 500,
          useNativeDriver: true,
        }).start();
    }
    const start_x_y_ticks_labels_aniamtion = () => {
      Animated.timing(animated_ticks_label_opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }

    const render_x_y_axis = () => {
        return (
          <G key="x-axis y-axis">
            <AnimatedCircle
              key={"x-axis x1y1-circle"}
              cx={x_axis_x1_point}
              cy={x_axis_y1_point}
              fill={COLORS.primary}
              r={animated_circle_radius}
            />
            <AnimatedCircle
              key={"x-axis x2y2-circle"}
              cx={y_axis_x1_point}
              cy={y_axis_y1_point}
              fill={COLORS.primary}
              r={animated_circle_radius}
            />
            <AnimatedCircle
              key={"y-axis x1y1-circle"}
              cx={x_axis_x2_point}
              cy={x_axis_y2_point}
              fill={COLORS.primary}
              r={animated_circle_radius}
            />
            <AnimatedLine
              key={"x-axis"}
              x1={x_axis_x1_point}
              y1={x_axis_y1_point}
              x2={animated_x_axis_width}
              y2={x_axis_y2_point}
              stroke={COLORS.primary}
              strokeWidth={2}
            />
            <AnimatedLine
              key={"y-axis"}
              x1={y_axis_x1_point}
              y1={animated_y_axis_width}
              x2={y_axis_x2_point}
              y2={y_axis_y2_point}
              stroke={COLORS.primary}
              strokeWidth={2}
            />
          </G>
        );
    }

    const render_x_axis_labels_and_ticks = () => {
        return data.map((item, index) => {
            let x_point = x_axis_x1_point + gap_between_x_axis_ticks * index;
            return (
              <G key={`x-axis labels and ticks${index}`}>
                <AnimatedLine
                  key={`x-axis-tick${index}`}
                  x1={x_point}
                  y1={x_axis_y1_point}
                  x2={x_point}
                  y2={x_axis_y1_point + 10}
                  strokeWidth={2}
                  stroke={COLORS.primary}
                  opacity={animated_ticks_label_opacity}
                />
                <AnimatedSvgText
                  fontSize={10}
                  x={x_point}
                  y={x_axis_y1_point + 20}
                  fill={COLORS.primary}
                  textAnchor="middle"
                  opacity={animated_ticks_label_opacity}
                >
                  {moment(item.date).format("DD MMM")}
                </AnimatedSvgText>
                <AnimatedSvgText
                  fontSize={10}
                  x={x_point}
                  y={x_axis_y1_point + 30}
                  fill={COLORS.primary}
                  textAnchor="middle"
                  opacity={animated_ticks_label_opacity}
                >
                  {moment(item.date).format("YYYY")}
                </AnimatedSvgText>
              </G>
            );
        });
    }

    const render_y_axis_labels_and_ticks = () => {
      return yAxisLabels.map((item, index) => {
        let y_point = y_axis_y2_point - gap_between_y_axis_ticks * index;
        return (
          <G key={`y-axis labels and ticks${index}`}>
            <AnimatedLine
              key={`y-axis tick${index}`}
              x1={margin.left}
              y1={y_point}
              x2={margin.left - 10}
              y2={y_point}
              strokeWidth={2}
              stroke={COLORS.primary}
              opacity={animated_ticks_label_opacity}
            />
            <AnimatedSvgText
              key={`y-axis label${index}`}
              x={margin.left - 20}
              y={y_point + 10 / 3}
              fill={COLORS.primary}
              textAnchor="end"
              fontSize={10}
              opacity={animated_ticks_label_opacity}
            >
              {item.toFixed(1)}
            </AnimatedSvgText>
          </G>
        );
      });
    }

    const getDPath = () => {
      const maxValueAtYAxis = yAxisLabels[yAxisLabels.length - 1];
      if(maxValueAtYAxis){
        let dPath = "";
        data.map((item, index) => {
          let x_point = x_axis_x1_point + gap_between_x_axis_ticks * index;
          let y_point =
            (maxValueAtYAxis - item.total) *
            (gap_between_y_axis_ticks / gapBetweenYAxisValues) +
            padding_from_screenBorder;
          if (index === 0) {
            dPath +=`M${x_point} ${y_point}`;
          } else {
            dPath +=`L${x_point} ${y_point}`;
          }
        });
        return dPath;
      }
    }

    const render_lineChart_path = () => {
      const dPath = getDPath();
      return (
        <AnimatedPath
          ref={animated_path_ref}
          d={dPath}
          strokeWidth={2}
          stroke={COLORS.yellow}
          onLayout={() =>
            setPathLength(animated_path_ref?.current.getTotalLength())
          }
          strokeDasharray={pathLength}
          strokeDashoffset={animated_path_length}
          opacity={animated_path_opacity}
        />
      );
    }

    const render_lineChart_circles = () => {
      const maxValueAtYAxis = yAxisLabels[yAxisLabels.length - 1];
      if (maxValueAtYAxis) {
        return data.map((item, index) => {
          let x_point = x_axis_x1_point + gap_between_x_axis_ticks * index;
          let y_point =
            (maxValueAtYAxis - item.total) *
              (gap_between_y_axis_ticks / gapBetweenYAxisValues) +
            padding_from_screenBorder;
          return (
            <G
              key={`line chart circles${index}`}
            >
              <AnimatedCircle
                cx={x_point}
                cy={y_point}
                r={animated_circle_radius}
                fill={COLORS.yellow}
              />
            </G>
          );
        });
      }
    }

    return (
      <View style={[styles.svgWrapper, { height: containerHeight }]}>
        <AnimatedSvg height="100%" width="100%" style={styles.svgStyle}>
          {render_x_y_axis()}
          {render_x_axis_labels_and_ticks()}
          {render_y_axis_labels_and_ticks()}
          {render_lineChart_path()}
          {render_lineChart_circles()}
        </AnimatedSvg>
      </View>
    );
}

export default LineChart;