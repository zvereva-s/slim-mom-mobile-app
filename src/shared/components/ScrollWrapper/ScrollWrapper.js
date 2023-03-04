import { ScrollView, SafeAreaView } from "react-native";

export default function ScrollWrapper({ children }) {
  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}
