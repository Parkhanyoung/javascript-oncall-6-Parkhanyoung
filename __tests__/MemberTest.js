import Member from "../src/model/member.js";

describe("멤버에 대한 테스트", () => {
  describe("이름이 1자 이상 5자 이하가 아닐 경우 예외처리한다.", () => {
    test.each([
      [() => new Member(""), ""],
      [() => new Member("우아한테크코스"), "우아한테크코스"],
    ])(`%s 입력 이름: %s`, (generateMember) => {
      expect(() => generateMember()).toThrow("[ERROR]");
    });
  });
});
