import { View, Image, Pressable } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

import Container from "../Container/Container";

import { styles } from "./styles";

const transition = {
  type: "timing",
  duration: 1050,
  easing: Easing.inOut(Easing.ease),
};

export default function BackgroundView({ children, backGdColor }) {
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
          style={{ ...styles.backGroundImage, ...styles.vector }}
          source={require("../../../../assets/background/vector.png")}
        />
        <MotiView
          style={{ flex: 1 }}
          transition={transition}
          from={{
            translateX: -100,
          }}
          animate={{
            translateX: 0,
          }}
        >
          <Image
            style={{ ...styles.backGroundImage, ...styles.banana }}
            source={require("../../../../assets/background/banana.png")}
          />
          <MotiView
            style={{ flex: 1 }}
            transition={transition}
            from={{
              translateX: -100,
            }}
            animate={{
              translateX: 0,
            }}
          >
            <Image
              style={{ ...styles.backGroundImage, ...styles.leaves }}
              source={require("../../../../assets/background/leaves.png")}
            />
            <MotiView
              style={{ flex: 1 }}
              transition={transition}
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
            >
              <Image
                style={{ ...styles.backGroundImage, ...styles.stawberry }}
                source={require("../../../../assets/background/stawberry.png")}
              />
              <Container>{children}</Container>
            </MotiView>
          </MotiView>
        </MotiView>
      </MotiView>
    </Pressable>
  );
}
