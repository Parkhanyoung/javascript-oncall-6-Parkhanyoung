import Member from "../model/member.js";

class Oncall {
  async init() {
    const name = "박한영";
    const member = new Member(name);
  }
}

export default Oncall;
