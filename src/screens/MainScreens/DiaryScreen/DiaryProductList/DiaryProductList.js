import { useDispatch } from "react-redux";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import useTranslate from "../../../../shared/hooks/useTranslate";
import useTheme from "../../../../shared/hooks/useTheme";

import { deleteProductRequest } from "../../../../redux/diary/diary-operations";

import Icon from "../../../../shared/components/Icon/Icon";

import * as themeVariables from "../../../../../assets/styleVariables/variables";

export default function DiaryProductList({ list }) {
  const { theme } = useTheme();
  const { t } = useTranslate();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        height: "80%",
        width: "100%",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {list.length > 0 && (
        <FlatList
          data={list}
          keyExtractor={({ _id }) => _id}
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
                  style={{
                    ...styles.text,
                    color: themeVariables[theme].colorText,
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <View
                style={{
                  ...styles.line,
                  borderBottomColor: themeVariables[theme].colorLine,
                }}
              >
                <Text
                  style={{
                    ...styles.text,
                    color: themeVariables[theme].colorText,
                  }}
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
                  style={{
                    ...styles.text,
                    color: themeVariables[theme].colorText,
                  }}
                >
                  {item.kcal} {t.kcal}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => dispatch(deleteProductRequest(item._id))}
              >
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
      )}
      {list.length === 0 && (
        <Text
          style={{
            ...styles.text,
            color: themeVariables[theme].colorText,
          }}
        >
          {t.emptyDiaryList}
        </Text>
      )}
    </View>
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
