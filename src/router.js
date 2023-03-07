import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";

import useTheme from "./shared/hooks/useTheme";
import useDevice from "./shared/hooks/useDevice";

import SignInScreen from "./screens/Auth/SignInScreen/SignInScreen";
import SignUpScreen from "./screens/Auth/SignUpScreen/SignUpScreen";

import DiaryScreen from "./screens/MainScreens/DiaryScreen/DiaryScreen";
import CalendarScreen from "./screens/MainScreens/CalendarScreen/CalendarScreen";
import AddProductScreen from "./screens/MainScreens/AddProductScreen/AddProductScreen";

import LangSwitcher from "./shared/components/LangSwitcher/LangSwitcher";
import SwitcherTheme from "./shared/components/SwitcherTheme/SwitcherTheme";

import Icon from "./shared/components/Icon/Icon";

import * as themeVariables from "../assets/styleVariables/variables";
import useTranslate from "./shared/hooks/useTranslate";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function useRoute(isLogin) {
  const { theme, isDark } = useTheme();
  const { t } = useTranslate();
  const { OS } = useDevice();

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
            headerShown: false,
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
        headerLeft: () => (
          <View style={{ paddingLeft: 15 }}>
            <LangSwitcher />
          </View>
        ),
        headerRight: () => (
          <View style={{ paddingRight: 30 }}>
            <SwitcherTheme />
          </View>
        ),
        headerTitleStyle: {
          fontFamily: "MulishBlack",
          color: themeVariables[theme].colorText,
          fontSize: 13,
        },
        headerStyle: {
          backgroundColor: themeVariables[theme].bgColor,
        },
        headerTitleAlign: "center",
        tabBarIcon: <LangSwitcher />,
        tabBarBackground: () => (
          <BlurView
            tint={isDark ? "dark" : "light"}
            intensity={100}
            style={{
              ...StyleSheet.absoluteFill,
              backgroundColor: themeVariables[theme].bgColor,
            }}
          >
            <View
              style={{
                backgroundColor: themeVariables[theme].bgColor,
                flex: 1,
              }}
            ></View>
          </BlurView>
        ),
      }}
    >
      <MainTab.Screen
        name="Diary"
        component={DiaryScreen}
        options={{
          title: t.mobileDiaryTitle,
          headerShown: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
            paddingVertical: 10,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderWidth: 1,
                borderColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                width: 50,
                height: 50,
              }}
            >
              <Icon type="diary" theme={theme} focused={focused} />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: t.mobileCalendarTitle,
          headerShown: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
            paddingVertical: 10,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderWidth: 1,
                borderColor: "transparent",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
              }}
            >
              <Icon type="calendarMenu" theme={theme} focused={focused} />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Add Product"
        component={AddProductScreen}
        tabBarStyle={{
          color: themeVariables[theme].colorDark,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
        options={{
          title: t.mobileAddDiaryTitle,
          headerShown: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
            paddingVertical: 10,
          },
          tabBarIcon: ({ focused }) => {
            const mainColor = theme === "light" ? "#C5FF87" : "#9191E9";
            const bgColor = focused ? "#ffa40b" : mainColor;
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "transparent",
                  backgroundColor: bgColor,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  width: OS === "iOS" ? 40 : 50,
                  height: OS === "iOS" ? 40 : 50,
                }}
              >
                <Icon type="plus" size={OS === "iOS" ? 30 : 40} />
              </View>
            );
          },
        }}
      />
    </MainTab.Navigator>
  );
}
