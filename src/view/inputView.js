import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/messages.js";

const InputView = {
  async readInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },

  async readMonthAndDay() {
    const input = await this.readInput("비상 근무를 배정할 월과 시작 요일을 입력하세요> ");
    return input;
  },

  async readWeekdayMembers() {
    const input = await this.readInput("평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ");
    return input;
  },

  async readHolidayMembers() {
    const input = await this.readInput("휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ");
    return input;
  },
};

export default InputView;
