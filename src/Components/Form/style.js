import { StyleSheet } from "react-native";
import { COLORS } from "../../../util/constant";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    fontSize: 18,
    borderColor: COLORS.white,
    color: "#fff",
  },
  inputContainer: {
    marginTop: 7,
  },
  inputText: {
    fontSize: 15,
    color: COLORS.white,
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
    borderRadius: 6,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
  pickerContainer: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 18,
    borderColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
