import { View } from "react-native";

import SignInScreen from "../Auth/SignInScreen/SignInScreen";
import SignUpScreen from "../Auth/SignUpScreen/SignUpScreen";

export default function Main() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SignInScreen />
      {/* <SignUpScreen /> */}
    </View>
  );
}
