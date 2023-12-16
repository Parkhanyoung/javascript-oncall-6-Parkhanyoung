import { ERROR_MESSAGE } from "../constants/messages.js";

class Member {
  #name;

  constructor(name) {
    Member.#validateName(name);

    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  static #validateName(name) {
    if (!(0 < name.length && name.length < 6)) {
      throw new Error(ERROR_MESSAGE.invalidMemberName);
    }
  }
}

export default Member;
