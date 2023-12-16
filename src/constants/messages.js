const INPUT_MESSAGE = {};
const OUTPUT_MESSAGE = {};

const errorString = (message) => `[ERROR] ${message}`;
// new
const ERROR_MESSAGE = {
  error: errorString(""),
  invalidMembers: errorString("멤버 객체가 아닌 값이 포함되어 있습니다."),
  invalidMemberLength: errorString("멤버 수는 최소 5명, 최대 35명입니다."),
  notUniqueNames: errorString("멤버 간 닉네임은 중복될 수 없습니다."),

  invalidMonth: errorString("유효하지 않은 달입니다."),
  invalidDate: errorString("유효하지 않은 날짜입니다."),
  invalidMemberName: errorString("근무자의 이름은 1글자 이상 5글자이하여야 합니다."),
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
