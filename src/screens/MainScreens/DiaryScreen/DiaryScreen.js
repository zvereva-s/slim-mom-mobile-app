import { View, TouchableOpacity } from "react-native";

import { useState } from "react";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";

import { converToDate } from "../../../shared/utils/utils";

import DiaryProductList from "./DiaryProductList/DiaryProductList";
import SummaryList from "./SummaryList/SummaryList";
import NotRecommendedProductsModal from "./NotRecommendedProductsModal/NotRecommendedProductsModal";
import CalendarModal from "./CalendarModal/CalendarModal";

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
  const [calendarVisible, setCalendarVisible] = useState(false);

  const { year, month, day } = converToDate(new Date());
  const [date, setDate] = useState(`${day}.${month}.${year}`);

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
            text={date}
            color={themeVariables[theme].colorDark}
            size={30}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setCalendarVisible(!calendarVisible)}
          >
            <Icon type="calendar" size={20} theme={theme} />
          </TouchableOpacity>
        </View>
        <CalendarModal
          calendarVisible={calendarVisible}
          setCalendarVisible={setCalendarVisible}
          setDate={setDate}
        />
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
          text={`${t.summaryTitle} ${date}`}
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
