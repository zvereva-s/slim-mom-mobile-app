import { SelectList } from "react-native-dropdown-select-list";
import { View } from "react-native";
import { useState, useEffect } from "react";

import useTranslate from "../../../../../shared/hooks/useTranslate";
import useTheme from "../../../../../shared/hooks/useTheme";

import * as themeVariables from "../../../../../../assets/styleVariables/variables";

export default function DropdownProductList({ list, handleSelectInput }) {
  const { lang, t } = useTranslate();
  const { theme } = useTheme();

  const data = list.map(({ key, name }) => ({ key, value: name[lang] }));

  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (selected) {
      handleSelectInput(selected, "key");
    }
  }, [selected]);

  return (
    <View style={{ width: "100%" }}>
      <SelectList
        data={data}
        save="key"
        setSelected={(val) => setSelected(val)}
        placeholder={t.addFormInput}
        searchPlaceholder={t.addFormInput}
        notFoundText={t.notFoundText}
        fontFamily="MulishBlack"
        boxStyles={{
          borderColor: "transparent",
          borderRadius: 0,
          borderBottomWidth: 3,
          borderBottomColor: themeVariables[theme].colorLine,
          paddingLeft: 0,
        }}
        inputStyles={{
          color: themeVariables[theme].colorText,
          fontSize: 16,
        }}
        dropdownStyles={{
          borderColor: "transparent",
        }}
        dropdownItemStyles={{
          paddingLeft: 0,
        }}
        dropdownTextStyles={{
          color: themeVariables[theme].colorText,
        }}
      />
    </View>
  );
}
