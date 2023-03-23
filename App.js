import React, { useEffect, useState } from "react";
import "expo-dev-menu";
import "react-native-reanimated";
import "react-native-gesture-handler";

import * as Font from "expo-font";

import { Provider } from "react-redux";
import { ThemeProvider } from "./src/shared/providers/ThemeProvider";
import { LanguageProvider } from "./src/shared/providers/LanguageProvider";

import { store } from "./src/redux/store";

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
      <LanguageProvider>
        <ThemeProvider>{fontsLoaded && <Main />}</ThemeProvider>
      </LanguageProvider>
    </Provider>
  );
}
