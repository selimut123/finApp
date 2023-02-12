import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  boxContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  title:{
    fontSize: 20,
  },
});
