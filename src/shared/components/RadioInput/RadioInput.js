import Toast from "react-native-toast-message";

import { useState } from "react";
import { MotiView } from "moti";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

import { notify, adviceActivity } from "../../utils/utils";
import { toastConfig } from "../Toast/toastConfig";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function RadioInput({
  stylesProps,
  buttons,
  label,
  name,
  handleRadioInput,
  notifyStatus,
}) {
  const { theme } = useTheme();
  const { lang } = useTranslate();

  const [activeI, setActiveI] = useState();

  return (
    <>
      <Pressable style={{ ...styles.wrapper, ...stylesProps }}>
        <Text
          style={{
            ...styles.label,
            color: themeVariables[theme].colorPlaceholder,
          }}
        >
          {label}
        </Text>
        <View
          style={{
            ...styles.container,
            flexDirection: buttons.length > 4 ? "column" : "row",
          }}
        >
          {buttons.map((btn, i) => (
            <TouchableOpacity
              style={styles.radioBtnWrapper}
              key={i}
              activeOpacity={0.8}
              onPress={() => {
                setActiveI(i);
                handleRadioInput({ name, value: btn.value });
                if (notifyStatus) {
                  notify(
                    adviceActivity({ value: btn.value }, lang).message,
                    "info",
                    lang
                  );
                }
              }}
            >
              <MotiView style={styles.radioBtn}>
                <MotiView
                  style={{
                    ...styles.insideRadioBtn,
                    backgroundColor: i === activeI ? "#FC842D" : "transparent",
                  }}
                />
              </MotiView>
              <Text
                style={{
                  ...styles.radioTitle,
                  fontFamily: i === activeI ? "MulishBlack" : "MulishRegular",
                  color:
                    i === activeI
                      ? themeVariables[theme].colorFocus
                      : themeVariables[theme].colorPlaceholder,
                }}
              >
                {btn.radioTitle}
              </Text>
            </TouchableOpacity>
          ))}
          <Toast config={toastConfig} />
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  label: {
    fontFamily: "MulishBlack",
    fontSize: 16,
  },
  container: {
    width: "100%",
    marginTop: 10,
  },
  radioBtnWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    marginRight: 28,
    marginVertical: 5,
  },
  radioBtn: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#E0E0E0",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 6,
  },
  insideRadioBtn: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  radioTitle: {
    fontSize: 16,
  },
});
