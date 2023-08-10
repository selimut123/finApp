import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  mainContainer: {
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    flex: 1,
  },
  container1: {
    margin: 10,
    paddingHorizontal: 10,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.white,
  },
});
