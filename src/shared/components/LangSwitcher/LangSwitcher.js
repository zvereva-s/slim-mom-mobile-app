import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../hooks/useTheme";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function LangSwitcher() {
  const { setLangSchema } = useTranslate();
  const { theme } = useTheme();

  const [choosedLang, setChoosedLang] = useState("UA");

  const handleOnPress = (e) => {
    setChoosedLang(e._dispatchInstances.memoizedProps.children);
    setLangSchema(e._dispatchInstances.memoizedProps.children);
  };
  const handleTernaryOperatorLang = (l, conditionOne, conditionTwo) => {
    return choosedLang === l ? conditionOne : conditionTwo;
  };
  const activeStyleOfBtn = (l) => {
    return handleTernaryOperatorLang(
      l,
      themeVariables[theme].colorSwitcherBackground,
      "transparent"
    );
  };
  const activeStyleTextLang = (l) => {
    return handleTernaryOperatorLang(l, "MulishBlack", "MulishLight");
  };

  return (
    <View
      style={{
        ...styles.langBox,
        backgroundColor: themeVariables[theme].colorSwitcherThumbBackground,
      }}
    >
      <TouchableOpacity
        style={{
          ...styles.btnLang,
          backgroundColor: activeStyleOfBtn("EN"),
        }}
        stylactiveOpacity={0.8}
      >
        <Text
          style={{
            ...styles.lang,
            color: themeVariables[theme].colorDark,
            fontFamily: activeStyleTextLang("EN"),
          }}
          onPress={handleOnPress}
        >
          EN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.btnLang,
          backgroundColor: activeStyleOfBtn("UA"),
        }}
        stylactiveOpacity={0.8}
      >
        <Text
          style={{
            ...styles.lang,
            color: themeVariables[theme].colorDark,
            fontFamily: activeStyleTextLang("UA"),
          }}
          onPress={handleOnPress}
        >
          UA
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.btnLang,
          backgroundColor: activeStyleOfBtn("RU"),
        }}
        stylactiveOpacity={0.8}
      >
        <Text
          style={{
            ...styles.lang,
            color: themeVariables[theme].colorDark,
            fontFamily: activeStyleTextLang("RU"),
          }}
          onPress={handleOnPress}
        >
          RU
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  langBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: 100,
    height: 25,

    borderRadius: 20,
  },
  btnLang: {
    justifyContent: "center",
    alignItems: "center",

    width: 28,
    height: 28,

    borderRadius: 50,
  },
  lang: {
    fontSize: 10,
  },
});
