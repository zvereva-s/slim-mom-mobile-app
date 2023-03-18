import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import useTheme from "../../../../shared/hooks/useTheme";

import NotRecommendedProducts from "../../../../shared/components/NotRecommendedProducts/NotRecommendedProducts";
import Button from "../../../../shared/components/Button/Button";

import * as themeVariables from "../../../../../assets/styleVariables/variables";

export default function NotRecommendedProductsModal({
  modalVisible,
  setModalVisible,
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
      <View style={styles.centeredView}>
        <View
          style={{
            ...styles.modalView,
            backgroundColor: themeVariables[theme].backgroundSec,
            shadowColor: themeVariables[theme].colorBoxShadowOrange,
          }}
        >
          <NotRecommendedProducts />
          <Button text="OK" func={() => setModalVisible(!modalVisible)} />
        </View>
      </View>
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
