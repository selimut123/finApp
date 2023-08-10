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
  titleContainer:{
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
  }
});
