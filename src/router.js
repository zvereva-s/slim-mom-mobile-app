import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";

import useTheme from "./shared/hooks/useTheme";

import SignInScreen from "./screens/Auth/SignInScreen/SignInScreen";
import SignUpScreen from "./screens/Auth/SignUpScreen/SignUpScreen";

import DiaryScreen from "./screens/MainScreens/DiaryScreen/DiaryScreen";
import CalendarScreen from "./screens/MainScreens/CalendarScreen/CalendarScreen";
import AddProductScreen from "./screens/MainScreens/AddProductScreen/AddProductScreen";

import LangSwitcher from "./shared/components/LangSwitcher/LangSwitcher";

import Icon from "./shared/components/Icon/Icon";

import * as themeVariables from "../assets/styleVariables/variables";
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function useRoute(isLogin) {
  const { theme } = useTheme();

  if (!isLogin) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Sign Up"
          component={SignUpScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: pureFinalPropsSelectorFactory,
          }}
          name="Sign In"
          component={SignInScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: themeVariables[theme].bgColor,
        tabBarInactiveBackgroundColor: themeVariables[theme].bgColor,
        tabBarBackground: () => (
          <BlurView
            tint={theme === "dark" ? "dark" : "light"}
            intensity={100}
            style={StyleSheet.absoluteFill}
          >
            <View
              style={{
                height: 96,
                backgroundColor: themeVariables[theme].bgColor,
              }}
            />
          </BlurView>
        ),
      }}
    >
      <MainTab.Screen
        name="Diary"
        component={DiaryScreen}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon type="sun" />,
        }}
      />
      <MainTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: true,
          tabBarShowLabel: true,
          tabBarStyle: { position: "absolute" },
          tabBarIcon: () => <Icon type="sun" />,
        }}
      />
      <MainTab.Screen
        name="AddProduct"
        component={AddProductScreen}
        tabBarStyle={{ backgroundColor: "red" }}
        options={{
          headerShown: true,
          tabBarShowLabel: true,
          tabBarStyle: { position: "absolute" },
          tabBarIcon: () => <Icon type="sun" />,
        }}
      />
    </MainTab.Navigator>
  );
}
