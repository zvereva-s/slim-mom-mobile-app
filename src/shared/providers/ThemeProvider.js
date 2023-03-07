import React, { useState } from "react";
import { Appearance } from "react-native";

export const ThemeContext = React.createContext({
  isDark: false,
  theme: "light",
  setThemeSchema: () => {},
});

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();

  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const defaultTheme = {
    isDark,
    theme: isDark ? "dark" : "light",
    setThemeSchema: () => {
      setIsDark(!isDark);
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
