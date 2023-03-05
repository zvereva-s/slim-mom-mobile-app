import { View, ActivityIndicator } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function Loader({ bool, size }) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        position: "absolute",
        top: 350,
        alignContent: "center",
        width: "100%",
      }}
    >
      <ActivityIndicator
        size={size}
        bool={bool}
        color={theme === "light" ? "#9191E9" : "#C5FF87"}
      />
    </View>
  );
}
