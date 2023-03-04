import React, { useEffect } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import useDimensions from "../../hooks/useDimensions";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";

export default function Container({ children }) {
  const { addListener, removeListener } = useDimensions();
  const { hideKeyboard, behavior } = useKeyboardStatus();

  useEffect(() => {
    addListener();
    return () => {
      removeListener();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <KeyboardAvoidingView style={styles.container} behavior={behavior}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",

    width: "100%",

    paddingHorizontal: 16,
    paddingTop: 32,
  },
});
