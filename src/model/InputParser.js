const InputParser = {
  parseMonthAndDay(input) {
    const splited = input.split(",");
    const [month, day] = splited.map((string) => string.trim());
    return [parseInt(month, 10), day];
  },

  parseMemberNames(memberNames) {
    const splited = memberNames.split(",");
    const trimmed = splited.map((string) => string.trim());
    return trimmed;
  },
};

export default InputParser;
