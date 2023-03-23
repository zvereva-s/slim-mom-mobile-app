import { Text, View, FlatList } from "react-native";

import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../hooks/useTheme";

import { makeUniqueRandomNotRecommendedProductList } from "../../utils/utils";

import Title from "../Title/Title";

import * as themeVariables from "../../../../assets/styleVariables/variables";

export default function NotRecommendedProducts({ list }) {
  const { t } = useTranslate();
  const { theme } = useTheme();
  const data = makeUniqueRandomNotRecommendedProductList(list);

  return (
    <View style={{ width: "100%", paddingVertical: 10 }}>
      <Title
        text={t.titleNotRecom}
        size={20}
        color={themeVariables[theme].colorDark}
        stylesProps={{ marginBottom: 20 }}
      />
      <FlatList
        data={data}
        keyExtractor={(_, i) => i}
        renderItem={({ item }) => (
          <View
            style={{
              paddingHorizontal: 10,
              marginVertical: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "MulishRegular",
                color: themeVariables[theme].colorDark,
              }}
            >
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
