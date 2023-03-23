import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice";
import healthyDataReducer from "./healthyData/healthyData-slice";
import diaryReducer from "./diary/diary-slice";

const rootReducer = combineReducers({
  auth: authReducer,
  healthyDataState: healthyDataReducer,
  diary: diaryReducer,
});

export default rootReducer;
