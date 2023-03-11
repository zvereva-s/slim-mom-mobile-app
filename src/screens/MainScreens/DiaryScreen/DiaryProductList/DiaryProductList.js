import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import useTranslate from "../../../../shared/hooks/useTranslate";
import useTheme from "../../../../shared/hooks/useTheme";

import Icon from "../../../../shared/components/Icon/Icon";

import * as themeVariables from "../../../../../assets/styleVariables/variables";

const data = [
  {
    id: 1,
    product: "Tasty product",
    weight: "350",
    kcal: "340",
  },
  {
    id: 2,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 3,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 4,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 5,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 11,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 21,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 31,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 41,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 51,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 112,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 212,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 312,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 412,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
  {
    id: 512,
    product: "Tasty product",
    weight: "350",
    kcal: "34",
  },
];

export default function DiaryProductList() {
  const { theme } = useTheme();
  const { t } = useTranslate();

  return (
    <FlatList
      style={{
        flex: 1,
        height: 265,
        width: "100%",
        marginTop: 20,
      }}
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingHorizontal: 10,

            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              ...styles.line,
              width: "60%",
              borderBottomColor: themeVariables[theme].colorLine,
            }}
          >
            <Text
              style={{ ...styles.text, color: themeVariables[theme].colorText }}
            >
              {item.product}
            </Text>
          </View>
          <View
            style={{
              ...styles.line,
              borderBottomColor: themeVariables[theme].colorLine,
            }}
          >
            <Text
              style={{ ...styles.text, color: themeVariables[theme].colorText }}
            >
              {item.weight} {t.g}
            </Text>
          </View>
          <View
            style={{
              ...styles.line,
              borderBottomColor: themeVariables[theme].colorLine,
            }}
          >
            <Text
              style={{ ...styles.text, color: themeVariables[theme].colorText }}
            >
              {item.kcal} {t.kcal}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <Icon
              type="close"
              size="13"
              theme={theme}
              colorProp={themeVariables[theme].colorText}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  line: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    marginRight: 9,
  },
  text: {
    fontSize: 15,
    fontFamily: "MulishRegular",
  },
});
