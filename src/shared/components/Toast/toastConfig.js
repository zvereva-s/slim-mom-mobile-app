import { View, Text, StyleSheet } from "react-native";
import { BaseToast, ErrorToast } from "react-native-toast-message";

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "pink" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontFamily: "MulishBlack",
        fontSize: 17,
      }}
      text2Style={{
        fontFamily: "MulishExtraLlight",
        fontSize: 15,
      }}
    />
  ),

  errorToast: ({ text1, text2 }) => (
    <View
      style={{
        ...s.container,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
      }}
    >
      <Text style={s.text1}>{text1}</Text>
      <Text style={s.text2}>{text2}</Text>
    </View>
  ),
  warningToast: ({ text1, text2 }) => (
    <View
      style={{
        ...s.container,
        borderColor: "#FC842D",
        backgroundColor: "rgba(252, 132, 45, 0.2)",
      }}
    >
      <Text style={s.text1}>{text1}</Text>
      <Text style={s.text2}>{text2}</Text>
    </View>
  ),
  infoToast: ({ text1, text2 }) => (
    <View
      style={{
        ...s.container,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      }}
    >
      <Text style={{ ...s.text1, color: "white" }}>{text1}</Text>
      <Text style={{ ...s.text2, color: "white" }}>{text2}</Text>
    </View>
  ),
  successToast: ({ text1, text2 }) => (
    <View
      style={{
        ...s.container,
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.3)",
      }}
    >
      <Text style={s.text1}>{text1}</Text>
      <Text style={s.text2}>{text2}</Text>
    </View>
  ),
};

const s = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    borderRadius: 20,
    borderWidth: 3,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  text1: { fontFamily: "MulishBlack", fontSize: 17, color: "#333333" },
  text2: { fontFamily: "MulishRegular", fontSize: 15, color: "#333333" },
});
