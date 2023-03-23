import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";

import { addProductRequest } from "../../../redux/diary/diary-operations";
import { getFoodList } from "../../../shared/api/diary";

import AddProductForm from "./AddProductForm/AddProductForm";

import LogoHeader from "../../../shared/components/LogoHeader/LogoHeader";
import UserInfo from "../../../shared/components/UserInfo/UserInfo";
import Container from "../../../shared/components/Container/Container";

import { converToDate } from "../../../shared/utils/utils";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function AddProductScreen({ navigation, route }) {
  const { t } = useTranslate();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { navigate } = navigation;
  const { dateProp } = route.params;

  const { year, month, day } = converToDate(new Date());
  const [date, setDate] = useState(dateProp || `${day}.${month}.${year}`);
  const [foodListForChoose, setFoodListForChoose] = useState([]);

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
    setDate(dateProp);
  }, [dateProp]);

  const onSubmit = (data) => {
    dispatch(addProductRequest({ ...data, date }));
  };

  return (
    <>
      <LogoHeader title={t.mobileAddDiaryTitle} />
      <UserInfo switchers={false} arrowBack={true} navigate={navigate} />
      <View
        style={{
          backgroundColor: themeVariables[theme].bgColor,
          width: "100%",
          height: "85%",
        }}
      >
        <Container>
          <AddProductForm
            onSubmit={onSubmit}
            foodListForChoose={foodListForChoose}
          />
        </Container>
      </View>
    </>
  );
}
