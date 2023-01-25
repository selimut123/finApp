import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3D98F3",
  },
  container: {
    position: "absolute",
    height: 50,
    width: 50,
    right: 25,
    bottom: 25,
  },
});
