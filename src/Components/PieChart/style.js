import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  circleContainer: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 10,
  },
  rotate: {
    transform: [{ rotateZ: "-90deg" }],
  },
  container2: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 150,
    height: 150,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  innerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
  container3: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  smallCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
