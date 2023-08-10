import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 30,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
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
    color: COLORS.white,
  },
  monContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
  },
  priceText: {
    position: "absolute",
    fontSize: 25,
    color: COLORS.green,
    right: 0,
    bottom: 0,
    marginBottom: 2,
  },
  chartContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
