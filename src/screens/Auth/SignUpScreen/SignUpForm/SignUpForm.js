import { View } from "react-native";

import useTranslate from "../../../../shared/hooks/useTranslate";

import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import Button from "../../../../shared/components/Button/Button";

export default function SignUpForm() {
  const { t } = useTranslate();
  return (
    <>
      <CustomInput
        placeholder={t.name}
        keyboardType="name"
        pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
      />
      <CustomInput
        placeholder={t.email}
        keyboardType="email"
        pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
      />
      <CustomInput
        placeholder={t.password}
        keyboardType="password"
        secureTextEntryStart={true}
        link={true}
      />
      <View style={{ width: "100%" }}>
        <View style={{ marginTop: 60 }}>
          <Button text={t.signUpBtn} func={() => {}} />
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <Button text={t.signInBtn} type="disabled" />
        </View>
      </View>
    </>
  );
}
