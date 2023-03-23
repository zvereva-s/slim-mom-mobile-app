import { NavigationContainer } from "@react-navigation/native";

import { View } from "react-native";

import useAuthState from "../../shared/hooks/useAuthState";
import useRoute from "../../router";

export default function Main() {
  const { isLogin } = useAuthState();

  const routing = useRoute(isLogin);

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>{routing}</View>
    </NavigationContainer>
  );
}
