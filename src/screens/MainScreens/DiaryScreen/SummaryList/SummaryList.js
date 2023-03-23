import { View, Text, StyleSheet } from "react-native";

import useTranslate from "../../../../shared/hooks/useTranslate";
import useTheme from "../../../../shared/hooks/useTheme";

import * as themeVariables from "../../../../../assets/styleVariables/variables";

export default function SummaryList({
  left,
  consumed,
  dailyRate,
  procentOfDayNorm,
}) {
  const { t } = useTranslate();
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 15,
      width: "100%",
      justifyContent: "center",
    },
    line: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    },
    text: {
      fontSize: 15,
      fontFamily: "MulishRegular",
      color: themeVariables[theme].colorText,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.text}>{t.left}</Text>
        <Text style={styles.text}>
          {left} {t.kcal}
        </Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text}>{t.consumed}</Text>
        <Text style={styles.text}>
          {consumed} {t.kcal}
        </Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text}>{t.dailyRate}</Text>
        <Text style={styles.text}>
          {dailyRate} {t.kcal}
        </Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text}>{t.procentOfNorm}</Text>
        <Text style={styles.text}>{procentOfDayNorm} %</Text>
      </View>
    </View>
  );
}
