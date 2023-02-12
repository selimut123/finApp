import { View, Text, Dimensions } from "react-native";

export const COLORS = {
  primary: "#689BFF",
  secondary: "#E8F5FF",
};


export const screenWidth = Dimensions.get("window").width;

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const headerStyle = {
    headerStyle: {
        backgroundColor: "#fff",
        height: 100,
    },
    headerTitleStyle:{
        height: 20,
        borderWidth: 1,
    },
    headerTintColor: "#000",
    headerTitleAlign: "center",
    headerRight: () => {
        <View>
            <Text>test</Text>
        </View>
    }
};

export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];