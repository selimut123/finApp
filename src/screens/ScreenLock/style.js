import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  codeContainer: {
    width: 150,
    marginTop: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  code: {
    width: 13,
    height: 13,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: "#000000",
  },
  keypadContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
    width: 282,
    height: 348,
    alignItems: "center",
    justifyContent: "center",
  },
  keypad: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderWidth: 4,
    margin: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  keypadText: {
    fontSize: 36,
    letterSpacing: 0,
    textAlign: "center",
  },
});