import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 55,
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  container: {
    position: "absolute",
    height: 50,
    width: 50,
    right: 25,
    bottom: 25,
  },
});
