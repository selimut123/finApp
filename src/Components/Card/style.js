import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
    paddingBottom: 10,
    marginTop: 10,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    paddingBottom: 5,
  },
  text: {
    fontSize: 15,
    color: COLORS.white,
  },
});
