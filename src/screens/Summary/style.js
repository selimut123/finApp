import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  box: {
    flex: 1,
    margin: 20,
    borderRadius: 5,
    padding: 30,
    backgroundColor: COLORS.onprimary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  },
  subbox: {
    bottom: 10,
    left: 30,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  mainTitle: {
    marginVertical: 10,
    fontSize: 35,
    color: COLORS.white,
  },
  historyTitle: {
    fontSize: 20,
    color: COLORS.white,
  },
  title2: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
  priceTitle: {
    fontSize: 35,
    marginLeft: 20,
    color: COLORS.green,
  },
  backButton: {
    left: 10,
    top: 10,
    position: "absolute",
  },
});
