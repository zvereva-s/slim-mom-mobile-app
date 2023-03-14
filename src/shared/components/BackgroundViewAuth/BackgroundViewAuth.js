import { Image, Pressable } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

import Container from "../Container/Container";

import { styles } from "./styles";

const transition = {
  type: "timing",
  duration: 450,
  easing: Easing.inOut(Easing.ease),
};

export default function BackgroundViewAuth({ children, backGdColor, flex }) {
  return (
    <Pressable style={{ ...styles.container, backgroundColor: backGdColor }}>
      <MotiView style={styles.container}>
        <Image
          style={{ ...styles.backGroundImage, ...styles.vector }}
          source={require("../../../../assets/background/vector.png")}
        />
        <MotiView
          style={{ flex }}
          transition={transition}
          from={{
            translateY: -100,
          }}
          animate={{
            translateY: 0,
          }}
        >
          <Image
            style={{ ...styles.backGroundImage, ...styles.banana }}
            source={require("../../../../assets/background/banana.png")}
          />
          <MotiView
            style={{ flex }}
            transition={transition}
            from={{
              translateY: -100,
            }}
            animate={{
              translateY: 0,
            }}
          >
            <Image
              style={{ ...styles.backGroundImage, ...styles.leaves }}
              source={require("../../../../assets/background/leaves.png")}
            />
            <MotiView
              style={{ flex }}
              transition={transition}
              from={{
                translateY: 100,
              }}
              animate={{
                translateY: 0,
              }}
            >
              <Image
                style={{ ...styles.backGroundImage, ...styles.stawberry }}
                source={require("../../../../assets/background/stawberry.png")}
              />
              <MotiView
                style={{ flex }}
                transition={{ duration: 2500 }}
                from={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Container>{children}</Container>
              </MotiView>
            </MotiView>
          </MotiView>
        </MotiView>
      </MotiView>
    </Pressable>
  );
}
