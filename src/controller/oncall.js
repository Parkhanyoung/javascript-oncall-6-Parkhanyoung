import Member from "../model/member.js";
import Members from "../model/members.js";
import Planner from "../model/planner.js";

class Oncall {
  async init() {
    const names = ["a", "b", "c", "d", "e"];
    const memberArr = names.map((name) => new Member(name));
    const members = new Members(memberArr);
    const members2 = new Members(memberArr);

    // 휴일 근무자 명단과 평일 근무자 명단이 일치하는지 확인
    const month = 1;
    const startDay = "수";
    const planner = new Planner(month, startDay, members, members2);

    const plan = planner.getOncallPlan();

    plan.map((member) => member.getName());
  }
}

export default Oncall;
