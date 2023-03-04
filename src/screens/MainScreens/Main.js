import { View } from "react-native";

import SignUpScreen from "../Auth/SignUpScreen/SignUpScreen";

export default function Main() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SignUpScreen />
    </View>
  );
}
