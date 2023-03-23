import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { View, TouchableOpacity } from "react-native";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";

import { getProductListRequest } from "../../../redux/diary/diary-operations";
import { summaryOfDayRequest } from "../../../redux/healthyData/healthyData-operations";

import { productListData } from "../../../redux/diary/diary-selector";
import {
  summaryObj,
  healthyDataObj,
} from "../../../redux/healthyData/healthyData-selectors";

import { getFoodList } from "../../../shared/api/diary";
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
  const { t, lang } = useTranslate();
  const { theme } = useTheme();

  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const [foodListForChoose, setFoodListForChoose] = useState([]);

  const { year, month, day } = converToDate(new Date());
  const [date, setDate] = useState(`${day}.${month}.${year}`);

  const { healthyData } = useSelector(healthyDataObj);
  const { left, consumed, dailyRate, procentOfDayNorm } =
    useSelector(summaryObj);

  const productList = useSelector(productListData);
  const products = productList
    ?.map((product) => ({
      ...product,
      name: foodListForChoose?.find((item) => String(item.key) === product.key)
        ?.name[lang],
    }))
    .filter((product) => product.date === date);

  useEffect(() => {
    async function func() {
      try {
        const { fullDataFood } = await getFoodList();
        setFoodListForChoose(
          fullDataFood.map((el) => ({ name: el.Name, key: el.key }))
        );
      } catch (e) {
        throw e;
      }
    }
    func();
    dispatch(getProductListRequest());
    dispatch(summaryOfDayRequest(date));
  }, [products.length]);

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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Add Product", { dateProp: date })
            }
            activeOpacity={0.8}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              backgroundColor: themeVariables[theme].colorFocus,
              borderRadius: 50,
            }}
          >
            <Icon type="plus" size={20} />
          </TouchableOpacity>
        </View>
        <CalendarModal
          calendarVisible={calendarVisible}
          setCalendarVisible={setCalendarVisible}
          setDate={setDate}
        />
        <DiaryProductList list={products} />
      </View>
      <BackgroundViewDiary backGdColor={themeVariables[theme].backgroundSec}>
        <Title
          text={`${t.summaryTitle} ${date}`}
          size={20}
          color={themeVariables[theme].colorDark}
        />
        <SummaryList
          left={left}
          consumed={consumed}
          dailyRate={dailyRate}
          procentOfDayNorm={procentOfDayNorm}
        />
        <Link text={t.titleNotRecom} func={() => setModalVisible(true)} />
        <NotRecommendedProductsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          notAllowedProducts={healthyData.notAllowedProducts[lang]}
        />
      </BackgroundViewDiary>
    </>
  );
}
