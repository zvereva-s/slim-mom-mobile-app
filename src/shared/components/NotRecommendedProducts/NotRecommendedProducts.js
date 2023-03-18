import { Text, View, FlatList } from "react-native";

import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../hooks/useTheme";

import Title from "../Title/Title";

import * as themeVariables from "../../../../assets/styleVariables/variables";

const data = [
  {
    id: 1,
    product: "Product 1",
  },
  {
    id: 2,
    product: "Product 2",
  },
  {
    id: 3,
    product: "Product 3",
  },
  {
    id: 4,
    product: "Product 4",
  },
  {
    id: 5,
    product: "Product 5",
  },
];

export default function NotRecommendedProducts() {
  const { t } = useTranslate();
  const { theme } = useTheme();

  return (
    <View>
      <Title
        text={t.titleNotRecom}
        size={20}
        color={themeVariables[theme].colorDark}
      />
      <FlatList
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
            <Text style={{ color: themeVariables[theme].colorDark }}>
              {item.product}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
