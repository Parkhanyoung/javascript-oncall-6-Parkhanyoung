import Member from "../model/member.js";
import Members from "../model/members.js";

class Oncall {
  async init() {
    const names = ["박한영", "박한영1", "박한영2", "박한영3", "박한영4"];
    const memberArr = names.map((name) => new Member(name));
    const members = new Members(memberArr);
  }
}

export default Oncall;
