import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    position: "relative",

    borderBottomWidth: 3,

    backgroundColor: "transparent",

    marginTop: 16,

    paddingLeft: 16,

    height: 40,
    width: "100%",

    fontFamily: "MulishBlack",
    fontSize: 16,
  },
  linkShow: {
    position: "absolute",
    top: 25,
    right: 10,

    fontFamily: "MulishRegular",

    fontSize: 15,
    lineHeight: 19,
  },
  inputActive: {
    backgroundColor: "#FFF",
    borderColor: "#FF6C00",
  },
  error: {
    marginTop: 2,

    padding: 3,
    fontSize: 11,

    borderBottomWidth: 1,
    borderBottomColor: "#FF6C00",
  },
});
