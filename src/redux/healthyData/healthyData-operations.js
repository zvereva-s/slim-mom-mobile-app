import { createOperation } from "../../shared/utils/utils";
import { patchDailyRateByUserId } from "../../shared/api/daily-rate";
import { getSummaryOfDay } from "../../shared/api/summary";

export const dailyRateUserRequest = createOperation(
  "healthyDate/dailyRateUser",
  patchDailyRateByUserId
);
export const summaryOfDayRequest = createOperation(
  "healthyDate/summaryOfDay",
  getSummaryOfDay
);
