import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  row: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
  },
  price: {
    fontSize: 30,
  },
  icon: {
    position: "absolute",
    right: 5,
    bottom: 5,
  },
});
