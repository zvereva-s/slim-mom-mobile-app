import { TouchableOpacity, Image, Text, View } from "react-native";
import useTheme from "../../hooks/useTheme";
import useDevice from "../../hooks/useDevice";
import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function LogoHeader({ title }) {
  const { theme } = useTheme();
  const { OS } = useDevice();

  return (
    <View
      style={{
        width: "100%",
        height: OS === "iOS" ? 90 : 80,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: themeVariables[theme].bgColor,
        borderBottomWidth: 2,
        borderColor: themeVariables[theme].colorLine,
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        paddingTop: OS === "iOS" ? 50 : 30,
      }}
    >
      <TouchableOpacity
        style={{ alignItems: "center", flexDirection: "row" }}
        activeOpacity={0.8}
      >
        <View
          style={{
            backgroundColor: theme === "dark" ? "#fff" : "transparent",
            borderRadius: 50,
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../../../assets/logo/Logo.png")}
          />
        </View>
        <Text
          style={{
            fontFamily: "MulishExtraLight",
            fontSize: 23,
            marginLeft: 10,
            color: themeVariables[theme].colorDark,
          }}
        >
          Slim
        </Text>
        <Text
          style={{
            fontFamily: "MulishExtraLight",
            fontSize: 23,
            color: themeVariables[theme].colorFocus,
          }}
        >
          Mom
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "MulishBlack",
          fontSize: 18,
          color: themeVariables[theme].colorText,
        }}
      >
        {title.toUpperCase()}
      </Text>
    </View>
  );
}
