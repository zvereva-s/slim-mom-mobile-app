import { Text, TouchableOpacity } from "react-native";

import useTheme from "../../hooks/useTheme";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function Link({ text, func }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ alignItems: "flex-end", justifyContent: "center" }}
      onPress={func}
    >
      <Text
        style={{
          fontFamily: "MulishRegular",
          fontSize: 15,
          textDecorationLine: "underline",
          color: themeVariables[theme].colorFocus,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
