import { ERROR_MESSAGE } from "../constants/messages.js";
import Member from "./member.js";

class Members {
  #members = [];

  constructor(members) {
    Members.#validateMembers(members);
    Members.#validateMemberLength(members);
    Members.#validateMemberNamesUnique(members);

    this.#members = [...members];
  }

  getNames() {
    return this.#members.map((member) => member.getName());
  }

  getMembers() {
    return this.#members;
  }

  static #validateMembers(members) {
    if (!members.every((member) => member instanceof Member)) {
      throw new Error(ERROR_MESSAGE.invalidMembers);
    }
  }

  static #validateMemberLength(members) {
    if (!(4 < members.length && members.length < 36)) {
      throw new Error(ERROR_MESSAGE.invalidMemberLength);
    }
  }

  static #validateMemberNamesUnique(members) {
    const names = members.map((member) => member.getName());

    if (new Set(names).size !== names.length) {
      throw new Error(ERROR_MESSAGE.notUniqueNames);
    }
  }
}

export default Members;
