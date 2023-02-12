import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  container1: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
  },
  circle: {
    borderWidth: 20,
    borderRadius: 250,
    padding: 10,
    display: "flex",
    alignItems: "center",
  },
  innercircle: {
    borderRadius: 200,
    width: 200,
    height: 200,
    backgroundColor: COLORS.secondary,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  numText: {
    fontSize: 40,
  },
  chestImg: {
    marginTop: 15,
  },
  phonecatImg:{
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: 5,
  },
});
