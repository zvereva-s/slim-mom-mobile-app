import { View } from "react-native";

import useForm from "../../../../shared/hooks/useForm";
import useTranslate from "../../../../shared/hooks/useTranslate";

import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import Button from "../../../../shared/components/Button/Button";

import DropdownProductList from "./DropdownProductList/DropdownProductList";

import { initialState } from "./initialState";

const list = [
  { key: 1, name: { en: "Chicken", ua: "Курка", ru: "Курица" } },
  { key: 2, name: { en: "Apple", ua: "Яблуко", ru: "Яблоко" } },
];

export default function AddProductForm({ onSubmit }) {
  const { t } = useTranslate();
  const { handleSubmit, handleSelectInput, handleChangeTextInput, state } =
    useForm({
      initialState,
      onSubmit,
    });
  const { weight } = state;
  return (
    <View style={{ width: "100%", marginTop: 100, alignItems: "center" }}>
      <DropdownProductList list={list} handleSelectInput={handleSelectInput} />
      <CustomInput
        placeholder={t.inputWeight}
        name="weight"
        stylesProps={{ paddingLeft: 0 }}
        onChangeText={handleChangeTextInput}
        value={weight}
      />
      <View style={{ width: "100%", marginTop: 20, alignItems: "center" }}>
        <Button type="submit" text={t.addProduct} func={handleSubmit} />
      </View>
    </View>
  );
}
