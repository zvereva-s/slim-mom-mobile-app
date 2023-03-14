import Toast from "react-native-toast-message";

import { useDispatch } from "react-redux";

import { Text, View } from "react-native";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";
import useAuthState from "../../../shared/hooks/useAuthState";

import { signupRequest } from "../../../redux/auth/auth-operations";
import { getErrorMessage, notify } from "../../../shared/utils/utils";
import { toastConfig } from "../../../shared/components/Toast/toastConfig";

import SignUpForm from "./SignUpForm/SignUpForm";

import BackgroundViewAuth from "../../../shared/components/BackgroundViewAuth/BackgroundViewAuth";
import LangSwitcher from "../../../shared/components/LangSwitcher/LangSwitcher";
import SwitcherTheme from "../../../shared/components/SwitcherTheme/SwitcherTheme";

import Loader from "../../../shared/components/Loader/Loader";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function SignUpScreen({ navigation }) {
  const { t, lang } = useTranslate();
  const { theme } = useTheme();

  const { error, loading } = useAuthState();
  let errMessage = error && getErrorMessage(error);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const obj = {
      name: data.default,
      email: data["email-address"],
      password: data["visible-password"],
    };
    dispatch(signupRequest(obj));
  };

  return (
    <BackgroundViewAuth backGdColor={themeVariables[theme].bgColor} flex={1}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          paddingTop: 55,
        }}
      >
        <LangSwitcher />
        <SwitcherTheme />
      </View>
      <View style={{ alignItems: "center", paddingVertical: 50 }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "MulishBlack",
            color: themeVariables[theme].colorFocus,
          }}
        >
          {t.signUpTitle}
        </Text>
        {loading && <Loader bool="true" size="large" />}
        {!loading && <SignUpForm onSubmit={onSubmit} navigation={navigation} />}
        {error && notify(errMessage[lang], "error", lang)}
        <Toast config={toastConfig} />
      </View>
    </BackgroundViewAuth>
  );
}
