import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";

import useHandleValidateInput from "../../hooks/useHandleValidateInput";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";
import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

import * as themeVariables from "../../../../assets/styleVariables/variables";

import { styles } from "./styles";

export default function CustomInput(props) {
  const {
    pattern,
    placeholder,
    keyboardType,
    value,
    onFocus,
    onChangeText,
    secureTextEntryStart,
    link,
    stylesProps,
    name,
  } = props;

  const [txtLink, setTxtLink] = useState(false);

  const [inputActive, setInputActive] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(secureTextEntryStart);
  const [inputValue, setInputValue] = useState("");

  const { t } = useTranslate();

  const { errValidation, setErrValidation, handleValidateInput } =
    useHandleValidateInput({ inputValue });

  const { setKeyboardStatus } = useKeyboardStatus();
  const { theme } = useTheme();

  const handleBlur = () => {
    handleValidateInput(arguments[0].name);
    setInputActive(false);
    setKeyboardStatus(false);

    if (inputValue.length === 0) {
      setErrValidation(null);
    }
  };
  const handleChangeText = (value) => {
    if (onChangeText) {
      onChangeText(value, arguments[0].name);
    }
    setInputValue(value);
    setInputActive(true);
  };
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
      setKeyboardStatus(true);
    }
  };

  return (
    <View style={{ position: "relative", width: "100%" }}>
      <TextInput
        style={{
          ...styles.input,
          borderBottomColor: themeVariables[theme].colorLine,
          color: themeVariables[theme].colorDark,
          ...stylesProps,
        }}
        placeholder={placeholder}
        placeholderTextColor={themeVariables[theme].colorPlaceholder}
        pattern={pattern}
        keyboardType={keyboardType}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}
        name={name}
      />
      {errValidation && (
        <View style={styles.error}>
          <Text
            style={{ color: themeVariables[theme].colorFocus, fontSize: 11 }}
          >
            ❌ {errValidation}
          </Text>
        </View>
      )}
      {link && (
        <Text
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
            setTxtLink(!txtLink);
          }}
          style={{ ...styles.linkShow, color: themeVariables[theme].colorText }}
        >
          {!txtLink && t.show}
          {txtLink && t.close}
        </Text>
      )}
    </View>
  );
}
