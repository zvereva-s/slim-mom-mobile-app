import { View, Image, Pressable } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

import Container from "../../../../shared/components/Container/Container";

import { styles } from "./styles";

const transition = {
  type: "timing",
  duration: 450,
  easing: Easing.inOut(Easing.ease),
};

export default function BackgroundViewDiary({ children, backGdColor }) {
  return (
    <Pressable style={{ ...styles.container, backgroundColor: backGdColor }}>
      <MotiView
        style={styles.container}
        transition={transition}
        from={{
          translateY: -100,
        }}
        animate={{
          translateY: 0,
        }}
      >
        <Image
          style={styles.backGround}
          source={require("../../../../../assets/background/leaves-diary.png")}
        />
        <Container>{children}</Container>
      </MotiView>
    </Pressable>
  );
}
