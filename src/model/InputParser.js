import { AVAILABLE_DAYS, AVAILABLE_MONTHS } from "../constants/date.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

const InputParser = {
  parseMonthAndDay(input) {
    const splited = input.split(",");
    const [month, day] = splited.map((string) => string.trim());

    this.validateMonth(month);
    this.validateDay(day);

    return [parseInt(month, 10), day];
  },

  validateMonth(month) {
    if (!AVAILABLE_MONTHS.includes(month)) {
      throw new Error(ERROR_MESSAGE.invalidMonth);
    }
  },

  validateDay(day) {
    if (!AVAILABLE_DAYS.includes(day)) {
      throw new Error(ERROR_MESSAGE.invalidDate);
    }
  },

  parseMemberNames(memberNames) {
    const splited = memberNames.split(",");
    const trimmed = splited.map((string) => string.trim());
    return trimmed;
  },
};

export default InputParser;
