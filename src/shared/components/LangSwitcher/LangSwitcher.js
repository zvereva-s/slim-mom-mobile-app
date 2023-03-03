import { View, Text, StyleSheet } from "react-native";

import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../hooks/useTheme";

export default function LangSwitcher() {
  const { lang, setLangSchema } = useTranslate();
  const { theme } = useTheme();

  return (
    <View style={styles.langBox}>
      <Text style={styles.lang} onPress={(e) => setLangSchema(e)}>
        EN
      </Text>
      <Text style={styles.lang} onPress={(e) => setLangSchema(e)}>
        UA
      </Text>
      <Text style={styles.lang} onPress={(e) => setLangSchema(e)}>
        RU
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  langBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    width: 76,
    height: 20,

    borderWidth: 1,
    borderRadius: 20,
    borderColor: "grey",
  },
  lang: {
    fontSize: 10,
    fontFamily: "MulishExtraLight",

    width: 25,
    height: 25,
    borderRadius: 50,
  },
});
