import { View } from "react-native";
import { useDispatch } from "react-redux";

import { addProductRequest } from "../../../redux/diary/diary-operations";

import AddProductForm from "./AddProductForm/AddProductForm";

import LogoHeader from "../../../shared/components/LogoHeader/LogoHeader";
import UserInfo from "../../../shared/components/UserInfo/UserInfo";
import Container from "../../../shared/components/Container/Container";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function AddProductScreen({ navigation }) {
  const { t } = useTranslate();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { navigate } = navigation;

  const onSubmit = (data) => {
    dispatch(addProductRequest(data));
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
          <AddProductForm onSubmit={onSubmit} />
        </Container>
      </View>
    </>
  );
}
