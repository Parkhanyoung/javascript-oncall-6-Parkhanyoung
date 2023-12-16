import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";

const OutputView = {
  printBlankLine() {
    Console.print("");
  },

  printPlan(month, plan) {
    this.printBlankLine();
    plan.forEach(({ name, isHoliday, date, day }) => {
      Console.print(`${month}월 ${date}일${isHoliday ? "(휴일)" : ""} ${day} ${name}`);
    });
  },
};

export default OutputView;
