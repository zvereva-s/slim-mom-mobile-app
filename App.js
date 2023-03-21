import React, { useEffect, useCallback, useState } from "react";
import "expo-dev-menu";
import "react-native-reanimated";
import "react-native-gesture-handler";

import { Text } from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import { ThemeProvider } from "./src/shared/providers/ThemeProvider";
import { LanguageProvider } from "./src/shared/providers/LanguageProvider";

import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/redux/store";

import Main from "./src/screens/MainScreens/Main";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      MulishBlack: require("./assets/fonts/Mulish/Mulish-Black.ttf"),
      MulishLight: require("./assets/fonts/Mulish/Mulish-Light.ttf"),
      MulishRegular: require("./assets/fonts/Mulish/Mulish-Regular.ttf"),
      MulishExtraLight: require("./assets/fonts/Mulish/Mulish-ExtraLight.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <LanguageProvider>
          <ThemeProvider>{fontsLoaded && <Main />}</ThemeProvider>
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
}
