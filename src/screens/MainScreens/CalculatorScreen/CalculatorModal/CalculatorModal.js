import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import useTheme from "../../../../shared/hooks/useTheme";
import useTranslate from "../../../../shared/hooks/useTranslate";

import NotRecommendedProducts from "../../../../shared/components/NotRecommendedProducts/NotRecommendedProducts";
import Title from "../../../../shared/components/Title/Title";
import Button from "../../../../shared/components/Button/Button";

import * as themeVariables from "../../../../../assets/styleVariables/variables";

export default function CalculatorModal({
  navigation,
  setOpenModal,
  openModal,
  notAllowedProducts,
  dailyRate,
}) {
  const { theme } = useTheme();
  const { t, lang } = useTranslate();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}
      onRequestClose={() => {
        setOpenModal(!openModal);
      }}
    >
      <TouchableOpacity
        style={{
          ...styles.centeredView,
          backgroundColor: themeVariables[theme].colorSwitcherThumbBackground,
        }}
        activeOpacity={0.8}
        onPress={() => setOpenModal(!openModal)}
      >
        <View style={styles.modalView}>
          <Title
            text={t.recomendedDaily}
            size={20}
            color={themeVariables[theme].colorDark}
            stylesProps={{ marginBottom: 20 }}
          />
          <Title
            text={dailyRate}
            size={20}
            color={themeVariables[theme].colorModalCalories}
            stylesProps={{ marginBottom: 20 }}
          />
          <NotRecommendedProducts list={notAllowedProducts[lang]} />
          <Button
            text={t.calculatorBtn}
            navigate={() => {
              navigation.navigate("Diary");
              setOpenModal(!openModal);
            }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    elevation: 5,
  },
});
