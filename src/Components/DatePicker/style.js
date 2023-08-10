import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  button: {
    padding: 15,
  },
  scrollModal: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
});
