import { View } from "react-native";

import useForm from "../../../../shared/hooks/useForm";
import useTranslate from "../../../../shared/hooks/useTranslate";

import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import Button from "../../../../shared/components/Button/Button";

import initialState from "./initialState";

export default function SignInForm({ onSubmit, navigation }) {
  const { t } = useTranslate();
  const { state, handleChangeTextInput, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <>
      <CustomInput
        placeholder={t.login}
        keyboardType="email-address"
        pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
        onChangeText={handleChangeTextInput}
        value={email}
      />
      <CustomInput
        placeholder={t.password}
        keyboardType="visible-password"
        secureTextEntryStart={true}
        link={true}
        onChangeText={handleChangeTextInput}
        value={password}
      />
      <View style={{ width: "100%" }}>
        <View style={{ marginTop: 60 }}>
          <Button text={t.signInBtn} func={handleSubmit} />
        </View>
        <View
          style={{ width: "100%", marginTop: 20 }}
          onPress={navigation.navigate("Sign Up")}
        >
          <Button text={t.signUpBtn} type="disabled" />
        </View>
      </View>
    </>
  );
}
