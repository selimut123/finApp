import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  },
  inputContainer: {
    marginTop: 7,
  },
  inputText: {
    fontSize: 15,
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
    borderRadius: 6,
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
});
