import Member from "./member.js";

class Members {
  #members = [];

  constructor(members) {
    Members.#validateMembers(members);
    Members.#validateMemberLength(members);
    Members.#validateMemberNamesUnique(members);

    this.#members = [...members];
  }

  static #validateMembers(members) {
    if (!members.every((member) => member instanceof Member)) {
      throw new Error("[ERROR] 멤버 객체가 아닌 값이 포함되어 있습니다.");
    }
  }

  static #validateMemberLength(members) {
    if (!(4 < members.length && members.length < 36)) {
      throw new Error("[ERROR] 멤버 수는 최소 5명, 최대 35명입니다.");
    }
  }

  static #validateMemberNamesUnique(members) {
    const names = members.map((member) => member.getName());

    if (new Set(names).size !== names.length) {
      throw new Error("[ERROR] 멤버 간 닉네임은 중복될 수 없습니다.");
    }
  }
}

export default Members;
