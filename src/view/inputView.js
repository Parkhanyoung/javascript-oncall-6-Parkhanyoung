import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/messages.js";

const InputView = {
  async readInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },

  async readMonthAndDay() {
    const input = await this.readInput(INPUT_MESSAGE.monthAndDay);
    return input;
  },

  async readWeekdayMembers() {
    const input = await this.readInput(INPUT_MESSAGE.weekdayMember);
    return input;
  },

  async readHolidayMembers() {
    const input = await this.readInput(INPUT_MESSAGE.holidayMember);
    return input;
  },
};

export default InputView;
