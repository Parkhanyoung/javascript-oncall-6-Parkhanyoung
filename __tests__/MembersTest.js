import Member from "../src/model/member.js";
import Members from "../src/model/members.js";

describe("멤버 콜렉션에 대한 테스트", () => {
  describe("멤버 수가 5명 미만, 35명 초과일 경우 예외처리한다.", () => {
    const tooLittleMembers = new Array(4).fill().map((_, index) => new Member(`${index}`));
    const tooManyMembers = new Array(36).fill().map((_, index) => new Member(`${index}`));

    test.each([
      [() => new Members(tooLittleMembers), tooLittleMembers.length],
      [() => new Members(tooManyMembers), tooManyMembers.length],
    ])(`%s 입력 멤버 수: %s`, (generateMembers, count) => {
      expect(() => generateMembers()).toThrow("[ERROR]");
    });
  });
});
