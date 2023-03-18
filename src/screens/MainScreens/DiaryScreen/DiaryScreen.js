import { View, TouchableOpacity } from "react-native";

import { useState } from "react";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";

import DiaryProductList from "./DiaryProductList/DiaryProductList";
import SummaryList from "./SummaryList/SummaryList";
import NotRecommendedProductsModal from "./NotRecommendedProductsModal/NotRecommendedProductsModal";

import Title from "../../../shared/components/Title/Title";
import BackgroundViewDiary from "./BackgroundViewDiary/BackgroundViewDiary";
import Icon from "../../../shared/components/Icon/Icon";
import LogoHeader from "../../../shared/components/LogoHeader/LogoHeader";
import UserInfo from "../../../shared/components/UserInfo/UserInfo";
import Link from "../../../shared/components/Link/Link";

import { styles } from "./styles";
import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function DiaryScreen({ navigation }) {
  const { t } = useTranslate();
  const { theme } = useTheme();

  const { navigate } = navigation;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <LogoHeader title={t.mobileDiaryTitle} />
      <UserInfo switchers={true} arrowBack={false} />
      <View
        style={{
          backgroundColor: themeVariables[theme].bgColor,
          width: "100%",
          height: "55%",
          paddingBottom: 20,
        }}
      >
        <View style={{ ...styles.calendar, paddingTop: 20 }}>
          <Title
            text="02.02.2022"
            color={themeVariables[theme].colorDark}
            size={30}
          />
          <TouchableOpacity activeOpacity={0.8}>
            <Icon type="calendar" size={20} theme={theme} />
          </TouchableOpacity>
        </View>
        <DiaryProductList />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              backgroundColor: themeVariables[theme].colorFocus,
              borderRadius: 50,
              marginTop: 15,
            }}
          >
            <Icon type="plus" size="20" />
          </TouchableOpacity>
        </View>
      </View>
      <BackgroundViewDiary backGdColor={themeVariables[theme].backgroundSec}>
        <Title
          text={`${t.summaryTitle} 02/02/2022`}
          size={20}
          color={themeVariables[theme].colorDark}
        />
        <SummaryList />
        <Link text={t.titleNotRecom} func={() => setModalVisible(true)} />
        <NotRecommendedProductsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </BackgroundViewDiary>
    </>
  );
}
