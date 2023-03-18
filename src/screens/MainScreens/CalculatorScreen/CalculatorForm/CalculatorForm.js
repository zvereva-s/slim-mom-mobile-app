import { View } from "react-native";

import useForm from "../../../../shared/hooks/useForm";
import useTheme from "../../../../shared/hooks/useTheme";
import useTranslate from "../../../../shared/hooks/useTranslate";

import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import RadioInput from "../../../../shared/components/RadioInput/RadioInput";
import Button from "../../../../shared/components/Button/Button";

import { initialState } from "./initialState";
import * as themeVariables from "../../../../../assets/styleVariables/variables";

export default function CalculatorForm({ onSubmit }) {
  const { t } = useTranslate();
  const { theme } = useTheme();

  const { state, handleSubmit, handleRadioInput, handleChangeTextInput } =
    useForm({
      initialState,
      onSubmit,
    });

  const { height, age, weight, desiredWeight } = state;

  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 4,
        backgroundColor: themeVariables[theme].colorBackgroundForm,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomInput
        placeholder={t.height}
        name="height"
        onChangeText={handleChangeTextInput}
        pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
        stylesProps={{ paddingLeft: 0, marginTop: 0 }}
        value={height}
      />
      <CustomInput
        placeholder={t.age}
        name="age"
        pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
        onChangeText={handleChangeTextInput}
        stylesProps={{ paddingLeft: 0 }}
        value={age}
      />
      <CustomInput
        placeholder={t.weight}
        name="weight"
        pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
        onChangeText={handleChangeTextInput}
        stylesProps={{ paddingLeft: 0 }}
        value={weight}
      />
      <CustomInput
        placeholder={t.desiredWeight}
        name="desiredWeight"
        pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/"
        onChangeText={handleChangeTextInput}
        stylesProps={{ paddingLeft: 0 }}
        value={desiredWeight}
      />
      <RadioInput
        stylesProps={{ marginTop: 20 }}
        buttons={[
          { radioTitle: 1, value: 1 },
          { radioTitle: 2, value: 2 },
          { radioTitle: 3, value: 3 },
          { radioTitle: 4, value: 4 },
        ]}
        label={t.bloodType}
        name="bloodType"
        handleRadioInput={handleRadioInput}
      />
      <RadioInput
        stylesProps={{ marginTop: 20 }}
        buttons={[
          { radioTitle: t.male, value: "male" },
          { radioTitle: t.female, value: "female" },
        ]}
        label={t.gender}
        name="gender"
        handleRadioInput={handleRadioInput}
      />
      <RadioInput
        stylesProps={{ marginTop: 20 }}
        buttons={[
          { radioTitle: t.minimal, value: "1.2" },
          { radioTitle: t.low, value: "1.375" },
          { radioTitle: t.medium, value: "1.55" },
          { radioTitle: t.high, value: "1.7" },
          { radioTitle: t.extreme, value: "1.9" },
        ]}
        label={t.physicalActivity}
        name="physicalActivity"
        handleRadioInput={handleRadioInput}
        notifyStatus={true}
      />
      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        <Button type="submit" text={t.calculatorBtn} func={handleSubmit} />
      </View>
    </View>
  );
}
