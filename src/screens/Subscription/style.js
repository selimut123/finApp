import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  chartContainer: {
    marginTop: 10,
  },
  listContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    paddingVertical: 10,
    fontSize: 20,
    textAlign: "left",
    color: COLORS.white,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: COLORS.green,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: COLORS.grey,
  },
  box: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.onprimary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  circleDate: {
    width: 55,
    height: 55,
    borderWidth: 3,
    borderColor: COLORS.grey,
    borderRadius: 55,
    backgroundColor: COLORS.white,
  },
  circleText: {
    color: COLORS.black,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
  },
});
