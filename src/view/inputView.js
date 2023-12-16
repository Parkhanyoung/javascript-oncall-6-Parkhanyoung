import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/messages.js";

const InputView = {
  async readInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },

  async read() {
    const input = await this.readInput();
    return input;
  },
};

export default InputView;
