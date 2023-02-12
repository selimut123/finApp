import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    flex: 1,
    margin: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 30,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  },
  subbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  mainTitle: {
    fontSize: 25,
  },
  title2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priceTitle: {
    fontSize: 30,
    marginLeft: 20,
    color: "#00FF44",
  },
  title: {
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  container1: {
    marginBottom: 50,
  },
  backButton: {
    left: 5,
    top: 5,
    position: "absolute",
  },
});
