import { DAY_COUNT, HOLIDAY_PER_MONTH } from "../constants/date.js";

export const getDates = (month) => {
  const dayCount = DAY_COUNT[month];
  const result = new Array(dayCount).fill().map((_, index) => index + 1);
  return result;
};

export const isHoliday = (month, date) => {
  const isHoliday = HOLIDAY_PER_MONTH[month].includes(date);
  return isHoliday;
};
