import { useMemo } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

import useTheme from "../../hooks/useTheme";

import Icon from "../Icon/Icon";

import * as themeVariables from "../../../../assets/styleVariables/variables";

const size = 45;
const transition = {
  type: "timing",
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};

export default function SwitcherTheme() {
  const { theme, setThemeSchema } = useTheme();

  const trackWidth = useMemo(() => {
    return size * 1.5;
  }, [size]);
  const trackHeight = useMemo(() => {
    return size * 0.7;
  }, [size]);

  const knobSize = useMemo(() => {
    return size * 0.7;
  }, [size]);

  const handleTernaryOperatorIfThemeLight = (conditionOne, conditionTwo) => {
    return theme === "light" ? conditionOne : conditionTwo;
  };

  const iconSun = <Icon style={styles.icon} type="sun" size={size / 2} />;
  const iconMoon = (
    <Icon style={styles.icon} type="moon" theme={theme} size={size / 2} />
  );

  return (
    <Pressable onPress={setThemeSchema}>
      <View style={styles.box}>
        <MotiView
          from={{
            backgroundColor: themeVariables[theme].colorSwitcherThumbBackground,
          }}
          animate={{
            backgroundColor: themeVariables[theme].colorSwitcherThumbBackground,
          }}
          transition={transition}
          style={{
            ...styles.track,
            justifyContent: handleTernaryOperatorIfThemeLight(
              "flex-end",
              "flex-start"
            ),
            width: trackWidth,
            height: trackHeight,
            borderRadius: trackHeight / 2,
            backgroundColor: themeVariables[theme].colorSwitcherThumbBackground,
          }}
        >
          {handleTernaryOperatorIfThemeLight(iconMoon, iconSun)}
        </MotiView>
        <MotiView
          transition={transition}
          from={{
            translateX: handleTernaryOperatorIfThemeLight(
              -trackWidth / 3.5,
              trackWidth / 3.5
            ),
          }}
          style={{
            ...styles.knob,
            width: knobSize,
            height: knobSize,
            borderRadius: knobSize / 2,
            backgroundColor: themeVariables[theme].colorSwitcherBackground,
          }}
        >
          {handleTernaryOperatorIfThemeLight(iconSun, iconMoon)}
        </MotiView>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  track: {
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  knob: {
    justifyContent: "center",
    alignItems: "center",
  },
});
