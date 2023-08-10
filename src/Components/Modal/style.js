import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    backgroundColor: COLORS.onprimary,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.grey,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
  },
  scrollModal: {
    flex: 1,
    justifyContent: "center",
  },
});
