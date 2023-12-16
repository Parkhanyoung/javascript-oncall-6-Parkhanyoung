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
      throw new Error("[ERROR] 유효하지 않은 이름 입력 값입니다. 다시 입력해 주세요.");
    }
  }
}

export default Member;
