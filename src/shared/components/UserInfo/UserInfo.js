import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import useTheme from "../../hooks/useTheme";
import useAuthState from "../../hooks/useAuthState";
import useTranslate from "../../hooks/useTranslate";

import { logoutRequest } from "../../../redux/auth/auth-operations";

import LangSwitcher from "../LangSwitcher/LangSwitcher";
import SwitcherTheme from "../SwitcherTheme/SwitcherTheme";

import * as themeVariables from "../../../../assets/styleVariables/variables";
import Icon from "../Icon/Icon";

export default function UserInfo({ switchers, arrowBack }) {
  const { t } = useTranslate();
  const { theme } = useTheme();

  const dispatch = useDispatch();
  const { user, token } = useAuthState();

  const logout = () => {
    console.log("click");
    dispatch(logoutRequest(token));
  };

  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: themeVariables[theme].bgColor,
        borderBottomWidth: 2,
        borderColor: themeVariables[theme].colorLine,
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        {switchers && <LangSwitcher />}
        {switchers && <SwitcherTheme />}
        {arrowBack && <Icon type="arrowBack" size={18} theme={theme} />}
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "30%",
          justifyContent: "space-around",
          alignItems: "baseline",
        }}
      >
        <Text
          style={{
            ...styles.userText,
            color: themeVariables[theme].colorText,
            fontFamily: "MulishBlack",
          }}
        >
          {user?.name?.split(" ")[0] || "User"}
        </Text>
        <Text
          style={{ ...styles.userText, color: themeVariables[theme].colorText }}
        >
          |
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{
              ...styles.userText,
              color: themeVariables[theme].colorText,
            }}
          >
            {t.logOut}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userText: {
    fontFamily: "MulishRegular",
  },
});
