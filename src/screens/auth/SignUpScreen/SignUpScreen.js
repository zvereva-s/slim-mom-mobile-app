import { Text, View } from "react-native";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";

import SignUpForm from "./SignUpForm/SignUpForm";

import BackgroundView from "../../../shared/components/BackgroundView/BackgroundView";
import LangSwitcher from "../../../shared/components/LangSwitcher/LangSwitcher";
import SwitcherTheme from "../../../shared/components/SwitcherTheme/SwitcherTheme";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function SignUpScreen() {
  const { t } = useTranslate();
  const { theme } = useTheme();

  return (
    <BackgroundView backGdColor={themeVariables[theme].bgColor}>
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
      <View style={{ alignItems: "center", paddingVertical: 100 }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "MulishBlack",
            color: themeVariables[theme].colorFocus,
          }}
        >
          {t.signUpTitle}
        </Text>
        <SignUpForm />
      </View>
    </BackgroundView>
  );
}
