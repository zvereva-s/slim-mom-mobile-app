import { combineReducers } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import healthyDataReducer from "./healthyData/healthyData-slice";
import diaryReducer from "./diary/diary-slice";

const persistConfig = {
  key: "token",
  storage: AsyncStorage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  healthyDataState: healthyDataReducer,
  diary: diaryReducer,
});

export default rootReducer;
