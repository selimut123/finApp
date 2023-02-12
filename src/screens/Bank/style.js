import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 35,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#707070",
  },
  mainTitle: {
    fontSize: 30,
  },
  amountContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  chestImg: {
    width: 35,
    height: 35,
  },
  amountTitle: {
    fontSize: 50,
  },
  box: {
    height: "65%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    elevation: 5,
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  boxTitle: {
    fontSize: 25,
  },
  catContainer: {
    position: "absolute",
    left: 5,
    bottom: 20,
  },
});
