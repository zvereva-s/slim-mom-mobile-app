import React, { useEffect, useCallback, useState } from "react";
import "expo-dev-menu";
import { LogBox, Text } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import { ThemeProvider } from "./src/shared/providers/ThemeProvider";
import { LanguageProvider } from "./src/shared/providers/LanguageProvider";

import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/redux/store";

import Main from "./src/screens/MainScreens/Main";
import LangSwitcher from "./src/shared/components/LangSwitcher/LangSwitcher";

export default function App() {
  const [fontsLoaded] = useFonts({
    MulishBlack: require("./assets/fonts/Mulish/Mulish-Black.ttf"),
    MulishLight: require("./assets/fonts/Mulish/Mulish-Light.ttf"),
    MulishRegular: require("./assets/fonts/Mulish/Mulish-Regular.ttf"),
    MulishExtraLight: require("./assets/fonts/Mulish/Mulish-ExtraLight.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <LanguageProvider>
            <ThemeProvider>
              <Main onLayoutRootView={onLayoutRootView} />
              <LangSwitcher />
            </ThemeProvider>
          </LanguageProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
