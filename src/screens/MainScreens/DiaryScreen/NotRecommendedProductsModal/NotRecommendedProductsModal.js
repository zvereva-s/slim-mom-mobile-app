import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";

import useTheme from "../../../../shared/hooks/useTheme";

import NotRecommendedProducts from "../../../../shared/components/NotRecommendedProducts/NotRecommendedProducts";
import Button from "../../../../shared/components/Button/Button";

import * as themeVariables from "../../../../../assets/styleVariables/variables";

export default function NotRecommendedProductsModal({
  modalVisible,
  setModalVisible,
  notAllowedProducts,
}) {
  const { theme } = useTheme();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        style={styles.centeredView}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{
            ...styles.modalView,
            backgroundColor: themeVariables[theme].backgroundSec,
            shadowColor: themeVariables[theme].colorBoxShadowOrange,
          }}
        >
          <NotRecommendedProducts list={notAllowedProducts} />
          <Button
            text="OK"
            func={() => setModalVisible(!modalVisible)}
            stylesProps={{ marginTop: 20 }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
