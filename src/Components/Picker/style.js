import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
  },
  scrollModal: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: COLORS.onprimary,
    padding: 15,
  },
});
