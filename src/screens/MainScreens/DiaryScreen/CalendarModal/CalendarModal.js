import { Calendar } from "react-native-calendars";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import useTheme from "../../../../shared/hooks/useTheme";

import * as themeVariables from "../../../../../assets/styleVariables/variables";

export default function CalendarModal({
  calendarVisible,
  setCalendarVisible,
  setDate,
}) {
  const { theme } = useTheme();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={calendarVisible}
      onRequestClose={() => {
        setCalendarVisible(!calendarVisible);
      }}
    >
      <TouchableOpacity
        style={{
          ...styles.centeredView,
          backgroundColor: themeVariables[theme].colorBackgroundForm,
        }}
        activeOpacity={0.8}
        onPress={() => setCalendarVisible(!calendarVisible)}
      >
        <View style={styles.modalView}>
          <Calendar
            onDayPress={({ dateString }) => {
              setCalendarVisible(!calendarVisible);
              const date = dateString.split("-").reverse().join(".");
              setDate(date);
            }}
            style={{
              paddingVertical: 10,
              borderRadius: 20,
            }}
            theme={{
              backgroundColor: themeVariables[theme].backgroundSec,
              calendarBackground: themeVariables[theme].backgroundSec,
              textSectionTitleColor: themeVariables[theme].colorModalCalories,
              textSectionTitleDisabledColor: "#d9e1e8",
              selectedDayBackgroundColor: themeVariables[theme].colorFocus,
              selectedDayTextColor: "#ffffff",
              todayTextColor: themeVariables[theme].colorFocus,
              dayTextColor: themeVariables[theme].colorText,
              textDisabledColor: theme === "dark" ? "#4d5056" : "#d9e1e8",
              dotColor: themeVariables[theme].colorFocus,
              selectedDotColor: "#ffffff",
              arrowColor: themeVariables[theme].colorFocus,
              disabledArrowColor: "#d9e1e8",
              monthTextColor: themeVariables[theme].colorFocus,
              indicatorColor: themeVariables[theme].colorFocus,
              textDayFontFamily: "MulishBlack",
              textMonthFontFamily: "MulishBlack",
              textDayHeaderFontFamily: "MulishBlack",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    elevation: 5,
  },
});
