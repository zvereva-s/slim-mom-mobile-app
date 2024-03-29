import { createAsyncThunk } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";

import { en } from "../../../assets/languages/en";
import { ua } from "../../../assets/languages/ua";
import { ru } from "../../../assets/languages/ru";

export const createOperation = (name, request, condition) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        const response = await request(data);
        return response;
      } catch (error) {
        return rejectWithValue(error);
      }
    },
    { condition }
  );
};

export const pending = (store) => ({ ...store, loading: true, error: null });

export const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload,
});

export const getErrorMessage = (error) => {
  let text = null;
  let errorMessage = null;

  if (error?.message) {
    errorMessage = error.message;
  } else {
    errorMessage = error;
  }

  switch (errorMessage.split(" ")[5]) {
    case "400":
      text = {
        en: "bad request",
        ru: "Неверный запрос",
        ua: "Некорректний запит",
      };
      break;
    case "401":
      text = {
        en: "Not Authorized",
        ru: "Отсутствует авторизация",
        ua: "Відсутня авторизація",
      };
      break;
    case "409":
      text = {
        en: "Email in use",
        ru: "Email используется",
        ua: "Email використовується",
      };
      break;
    default:
      text = {
        en: "Something goes wrong",
        ua: "Щось пішло не так",
        ru: "Что-то пошло не так",
      };
  }
  return text;
};

export const notify = (message, type, lang) => {
  switch (type) {
    case "error":
      Toast.show({
        type: "errorToast",
        text1: {
          en: "Ups...we have a problem ☹️",
          ua: "Упс...у нас проблема ☹️",
          ru: "Упс...у нас проблема ☹️",
        }[lang],
        text2: message,
        visibilityTime: 5000,
        autoHide: true,
      });
      break;
    case "warning":
      Toast.show({
        type: "warningToast",
        text1: {
          en: "Atantion...we have to solve it",
          ua: "Увага...треба це вирішити",
          ru: "Внимание...это нужно решить",
        }[lang],
        text2: message,
        visibilityTime: 5000,
        autoHide: true,
      });
      break;
    case "info":
      Toast.show({
        type: "infoToast",
        text2: message,
        visibilityTime: 5000,
        autoHide: true,
      });
      break;
    case "success":
      Toast.show({
        type: "successToast",
        text1: {
          en: "Yep! It's ok!",
          ua: "Йеп! Все вийшло",
          ru: "Все получилось",
        }[lang],
        text2: message,
        visibilityTime: 5000,
        autoHide: true,
      });
      break;
  }
};

export const adviceActivity = ({ value }, lang) => {
  let result = {
    message: "",
    value: "",
  };

  let text = null;
  switch (lang) {
    case "en": {
      text = en;
      break;
    }
    case "ru": {
      text = ru;
      break;
    }
    case "ua": {
      text = ua;
      break;
    }
  }

  switch (value) {
    case "1.2":
      result = {
        message: text.minimalAdv,
        value: "1.2",
      };
      break;
    case "1.375":
      result = {
        message: text.lowAdv,
        value: "1.375",
      };
      break;
    case "1.55":
      result = {
        message: text.moderateAdv,
        value: "1.55",
      };
      break;
    case "1.7":
      result = {
        message: text.highAdv,
        value: "1.7",
      };
      break;
    case "1.9":
      result = {
        message: text.extremeAdv,
        value: "1.9",
      };
      break;
    default:
      result = {};
  }

  return result;
};

export const converToDate = (dateValue) => {
  const year = dateValue.getFullYear();
  const month =
    String(dateValue.getMonth() + 1).length === 1
      ? 0 + String(dateValue.getMonth() + 1)
      : String(dateValue.getMonth() + 1);

  const day =
    String(dateValue.getDate()).length === 1
      ? 0 + String(dateValue.getDate())
      : String(dateValue.getDate());

  return { year, month, day };
};

export function makeUniqueRandomNotRecommendedProductList(list) {
  let resultList = [];
  let counter = 0;

  const randomArr = [];
  const uniqueArr = [];

  // choosing random products
  (function () {
    if (list) {
      while (counter < 5) {
        randomArr.push(list[Math.floor(Math.random() * 48)]);
        counter += 1;
      }
    }
  })();

  (function () {
    for (let item of randomArr) {
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
    }
  })();
  if (uniqueArr.length === 5) {
    resultList = uniqueArr;
  } else {
    resultList.push(list[Math.floor(Math.random() * 48)]);
  }

  return resultList;
}
