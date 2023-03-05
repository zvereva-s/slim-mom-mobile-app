import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { View } from "react-native";

import useAuthState from "../../shared/hooks/useAuthState";
import useRoute from "../../router";

import { getCurrentRequest } from "../../redux/auth/auth-operations";
import { useEffect } from "react";

export default function Main() {
  const dispatch = useDispatch();
  // const { isLogin } = useAuthState();

  const isLogin = false;

  const routing = useRoute(isLogin);

  useEffect(() => {
    dispatch(getCurrentRequest());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>{routing}</View>
    </NavigationContainer>
  );
}
