import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { View, Image, ScrollView } from "react-native";

import { healthyDataObj } from "../../../redux/healthyData/healthyData-selectors";
import { dailyRateUserRequest } from "../../../redux/healthyData/healthyData-operations";

import CalculatorForm from "../../MainScreens/CalculatorScreen/CalculatorForm/CalculatorForm";
import CalculatorModal from "./CalculatorModal/CalculatorModal";

import Title from "../../../shared/components/Title/Title";
import LogoHeader from "../../../shared/components/LogoHeader/LogoHeader";
import UserInfo from "../../../shared/components/UserInfo/UserInfo";
import Container from "../../../shared/components/Container/Container";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";
import useAuthState from "../../../shared/hooks/useAuthState";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function CalculatorScreen({ navigation }) {
  const { t } = useTranslate();
  const { theme } = useTheme();

  const { user } = useAuthState();
  const { healthyData } = useSelector(healthyDataObj);
  const { dailyRate, notAllowedProducts } = healthyData;

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (data) => {
    dispatch(dailyRateUserRequest({ userID: user.id, obj: data }));
    setOpenModal(!openModal);
  };

  return (
    <>
      <LogoHeader title={t.mobileCalculatorTitle} />
      <UserInfo switchers={true} arrowBack={false} />
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
            {openModal && (
              <CalculatorModal
                navigation={navigation}
                openModal={openModal}
                setOpenModal={setOpenModal}
                dailyRate={dailyRate}
                notAllowedProducts={notAllowedProducts}
              />
            )}
          </Container>
        </ScrollView>
      </View>
    </>
  );
}
