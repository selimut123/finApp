import React, { useState } from "react";
import { View, Text, Animated } from "react-native";
import Svg, { Path, G, Line, Text as SvgText, Circle } from "react-native-svg";
import { COLORS, screenWidth } from "../../../util/constant";
import { parseISO, startOfMonth, endOfMonth, eachMonthOfInterval } from "date-fns";
import moment from "moment";
import * as d3 from "d3";
import { styles } from "./style";

const LineChart = ({entry, containerHeight=280}) => {

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

    const y_axis_x1_point = margin.left;
    const y_axis_y1_point = padding_from_screenBorder;
    const y_axis_x2_point = margin.left;
    const y_axis_y2_point = containerHeight - margin.bottom;

    const AnimatedSvg = Animated.createAnimatedComponent(Svg)
    const AnimatedLine = Animated.createAnimatedComponent(Line);
    const AnimatedCircle = Animated.createAnimatedComponent(Circle)

    const render_x_y_axis = () => {
        return (
        <G key="x-axis y-axis">
            <AnimatedCircle 
                key={"x-axis x1y1-circle"}
                cx={x_axis_x1_point}
                cy={x_axis_y1_point}
                fill={COLORS.primary}
                r={4}
            />
            <AnimatedCircle 
                key={"x-axis x2y2-circle"}
                cx={y_axis_x1_point}
                cy={y_axis_y1_point}
                fill={COLORS.primary}
                r={4}
            />
            <AnimatedCircle 
                key={"y-axis x1y1-circle"}
                cx={x_axis_x2_point}
                cy={x_axis_y2_point}
                fill={COLORS.primary}
                r={4}
            />
            <AnimatedLine
                key={"x-axis"}
                x1={x_axis_x1_point}
                y1={x_axis_y1_point}
                x2={x_axis_x2_point}
                y2={x_axis_y2_point}
                stroke={COLORS.primary}
                strokeWidth={2}
            />
            <AnimatedLine
                key={"y-axis"}
                x1={y_axis_x1_point}
                y1={y_axis_y1_point}
                x2={y_axis_x2_point}
                y2={y_axis_y2_point}
                stroke={COLORS.primary}
                strokeWidth={2}
            />
        </G>
        );
    }
    return (
        <View style={[styles.svgWrapper, {height: containerHeight}]}>
            <AnimatedSvg height="100%" width="100%" style={styles.svgStyle}>
                {render_x_y_axis()}
            </AnimatedSvg>
        </View>
    );
}

export default LineChart;