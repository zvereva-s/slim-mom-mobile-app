import { View, Text } from "react-native";

import useTheme from "../../hooks/useTheme";
import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function Title({ text, color, size, stylesProps }) {
  const { theme } = useTheme();
  return (
    <View style={{ alignItems: "center", ...stylesProps }}>
      <Text
        style={{
          fontSize: size,
          fontFamily: "MulishBlack",
          color: color || themeVariables[theme].colorFocus,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
