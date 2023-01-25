import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  totalSave: {
    fontSize: 45,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  chestImg: {
    width: 35,
    height: 35,
  },
  sumContainer: {
    paddingHorizontal: 30,
  },
  sumTitle: {
    fontSize: 25,
  },
  monContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  priceText: {
    position: "absolute",
    fontSize: 25,
    color: "#00FF44",
    right: 0,
    bottom: 0,
    marginBottom: 2,
  },
  chartContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
