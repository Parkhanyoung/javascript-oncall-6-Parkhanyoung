import InputParser from "../model/InputParser.js";
import Member from "../model/member.js";
import Members from "../model/members.js";
import Planner from "../model/planner.js";
import InputView from "../view/inputView.js";
import OutputView from "../view/outputView.js";

class Oncall {
  async init() {
    const [month, day] = await this.readMonthAndDay();

    const weekdayMembers = await this.readWeekdayMembers();
    const holidayMembers = await this.readHolidayMembers();

    const planner = new Planner(month, day, weekdayMembers, holidayMembers);

    const plan = planner.getOncallPlan();

    OutputView.printPlan(month, plan);
  }

  async readMonthAndDay() {
    const input = await InputView.readMonthAndDay();
    const monthAndDay = InputParser.parseMonthAndDay(input);
    return monthAndDay;
  }

  async readWeekdayMembers() {
    const input = await InputView.readWeekdayMembers();
    const parsed = InputParser.parseMemberNames(input);
    const members = this.getMembers(parsed);
    return members;
  }

  async readHolidayMembers() {
    const input = await InputView.readHolidayMembers();
    const parsed = InputParser.parseMemberNames(input);
    const members = this.getMembers(parsed);
    return members;
  }

  getMembers(memberNames) {
    const memberArr = memberNames.map((name) => new Member(name));
    const members = new Members(memberArr);
    return members;
  }
}

export default Oncall;
