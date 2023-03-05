import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button({ text, type, func }) {
  let btnStyle;
  let btnTitle;
  switch (type) {
    case "disabled": {
      btnStyle = {
        padding: 16,

        backgroundColor: "#F6F6F6",
        borderRadius: 100,

        borderWidth: 3,
        borderColor: "#9b9faa80",

        justifyContent: "center",
        alignItems: "center",
      };
      btnTitle = {
        ...styles.btnTitle,
        color: "#9b9faa80",
      };
      break;
    }
    default: {
      btnStyle = {
        width: "90%",

        padding: 16,

        backgroundColor: "#FC842D",
        borderRadius: 100,
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
      };
      btnTitle = styles.btnTitle;
      break;
    }
  }

  return (
    <TouchableOpacity
      style={type ? btnStyle : styles.btn}
      stylactiveOpacity={0.8}
      onPress={(e) => {
        type === "disabled" ? () => {} : func(e);
      }}
    >
      <Text style={btnTitle}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",

    padding: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,

    color: "#fff",

    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "MulishBlack",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    color: "#fff",
  },
});
