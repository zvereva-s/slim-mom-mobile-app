import { Pressable, View } from "react-native";

import useForm from "../../../../shared/hooks/useForm";
import useTranslate from "../../../../shared/hooks/useTranslate";

import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import Button from "../../../../shared/components/Button/Button";

import initialState from "./initialState";

export default function SignUpForm({ onSubmit, navigation }) {
  const { t } = useTranslate();
  const { navigate } = navigation;

  const { state, handleChangeTextInput, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <>
      <CustomInput
        placeholder={t.name}
        value={name}
        keyboardType="default"
        pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
        onChangeText={handleChangeTextInput}
      />
      <CustomInput
        placeholder={t.email}
        value={email}
        keyboardType="email-address"
        pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
        onChangeText={handleChangeTextInput}
      />
      <CustomInput
        placeholder={t.password}
        value={password}
        keyboardType="visible-password"
        secureTextEntryStart={true}
        link={true}
        onChangeText={handleChangeTextInput}
      />
      <View style={{ width: "100%" }}>
        <View style={{ marginTop: 60 }}>
          <Button text={t.signUpBtn} func={handleSubmit} />
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <Button
            text={t.signInBtn}
            type="disabled"
            func={() => navigate("Sign In")}
          />
        </View>
      </View>
    </>
  );
}
