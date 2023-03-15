import { View } from "react-native";

import LogoHeader from "../../../shared/components/LogoHeader/LogoHeader";
import UserInfo from "../../../shared/components/UserInfo/UserInfo";
import Container from "../../../shared/components/Container/Container";
import CustomInput from "../../../shared/components/CustomInput/CustomInput";
import Button from "../../../shared/components/Button/Button";

import useTranslate from "../../../shared/hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function AddProductScreen() {
  const { t } = useTranslate();
  const { theme } = useTheme();
  return (
    <>
      <LogoHeader title={t.mobileAddDiaryTitle} />
      <UserInfo switchers={false} arrowBack={true} />
      <View
        style={{
          backgroundColor: themeVariables[theme].bgColor,
          width: "100%",
          height: "85%",
        }}
      >
        <Container>
          <View style={{ width: "100%", marginTop: 100, alignItems: "center" }}>
            <CustomInput placeholder={t.addFormInput} name="name" />
            <CustomInput placeholder={t.inputWeight} name="weight" />
            <View
              style={{ width: "100%", marginTop: 20, alignItems: "center" }}
            >
              <Button type="submit" text={t.addProduct} />
            </View>
          </View>
        </Container>
      </View>
    </>
  );
}
