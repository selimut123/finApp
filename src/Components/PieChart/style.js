import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },
  titleStyle: {
    alignSelf: "center",
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: "700",
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
    marginBottom: 20,
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
  },
  container3: {
    position: 'absolute',
    bottom: 7,
    padding: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  smallCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  row:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});
