import { View, Image, ScrollView } from "react-native";

import CalculatorForm from "../../MainScreens/CalculatorScreen/CalculatorForm/CalculatorForm";

import Title from "../../../shared/components/Title/Title";
import LogoHeader from "../../../shared/components/LogoHeader/LogoHeader";
import UserInfo from "../../../shared/components/UserInfo/UserInfo";
import Container from "../../../shared/components/Container/Container";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function CalculatorScreen() {
  const { t } = useTranslate();
  const { theme } = useTheme();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <>
      <LogoHeader title={t.mobileCalculatorTitle} />
      <UserInfo />
      <View
        style={{
          backgroundColor: themeVariables[theme].bgColor,
          width: "100%",
          height: "85%",
        }}
      >
        <Image
          style={{
            position: "absolute",
            bottom: 0,
            resizeMode: "contain",
          }}
          source={require("../../../../assets/background/banana.png")}
        />
        <ScrollView>
          <Container>
            <Title
              text={t.calculatorTitle}
              color={themeVariables[theme].colorDark}
              size={30}
            />
            <CalculatorForm onSubmit={onSubmit} />
          </Container>
        </ScrollView>
      </View>
    </>
  );
}
