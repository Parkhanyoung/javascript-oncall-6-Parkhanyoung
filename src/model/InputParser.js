import { AVAILABLE_DAYS, AVAILABLE_MONTHS } from "../constants/date.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

const InputParser = {
  parseMonthAndDay(input) {
    const splited = this.splitByComma(input);
    const [month, day] = this.trimStrings(splited);

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

  parseMemberNames(namesInput) {
    const splited = this.splitByComma(namesInput);
    const memberNames = this.trimStrings(splited);
    return memberNames;
  },

  splitByComma(string) {
    return string.split(",");
  },

  trimStrings(strings) {
    return strings.map((string) => string.trim());
  },
};

export default InputParser;
