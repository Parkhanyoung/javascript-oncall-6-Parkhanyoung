const InputParser = {
  parseMonthAndDay(input) {
    const splited = input.split(",");
    const [month, day] = splited.map((string) => string.trim());

    this.validateMonth(month);
    this.validateDay(day);

    return [parseInt(month, 10), day];
  },

  validateMonth(month) {
    const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    if (!options.includes(month)) {
      throw new Error("[ERROR] 유효하지 않은 달입니다.");
    }
  },

  validateDay(day) {
    const options = ["월", "화", "수", "목", "금", "토", "일"];
    if (!options.includes(day)) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다.");
    }
  },

  parseMemberNames(memberNames) {
    const splited = memberNames.split(",");
    const trimmed = splited.map((string) => string.trim());
    return trimmed;
  },
};

export default InputParser;
