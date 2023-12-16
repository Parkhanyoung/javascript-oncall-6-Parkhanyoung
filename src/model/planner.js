import { WEEKEND, WEEK_DAYS } from "../constants/date.js";
import { getDates, isHoliday } from "../utils/date.js";
import { swapWithNext } from "../utils/swap.js";

class Planner {
  #weekdayMembers = [];
  #holidayMembers = [];

  #previousWorker;

  #pickingWeekdayIndex = 0;
  #pickingHolidayIndex = 0;

  #month;
  #dayStandard;

  constructor(month, startDay, weekdayMembers, holidayMembers) {
    this.#month = month;
    this.#setDayStandard(startDay);
    this.#weekdayMembers = weekdayMembers.getMembers();
    this.#holidayMembers = holidayMembers.getMembers();
  }

  #setDayStandard(startDay) {
    const startIndex = WEEK_DAYS.indexOf(startDay);
    const dayStandard = [...WEEK_DAYS.slice(startIndex), ...WEEK_DAYS.slice(0, startIndex)];

    this.#dayStandard = dayStandard;
  }

  getOncallPlan() {
    const dates = getDates(this.#month);
    const plan = dates.map((date) => this.pickWorker(date));
    const result = this.parsePlan(plan);
    return result;
  }

  parsePlan(plan) {
    return plan.map((member, index) => {
      const date = index + 1;

      return {
        name: member.getName(),
        isHoliday: isHoliday(this.#month, date),
        date,
        day: this.getDayString(date),
      };
    });
  }

  pickWorker(date) {
    const isHoliday = this.isHoliday(date);

    if (!isHoliday) {
      const worker = this.getWeekdayWorker();
      this.increasePickingWeekdayIndex();
      this.setPreviousWorker(worker);
      return worker;
    }

    if (isHoliday) {
      const worker = this.getHolidayWorder(date);
      this.increasePickingHolidayIndex();
      this.setPreviousWorker(worker);
      return worker;
    }
  }

  setPreviousWorker(member) {
    this.#previousWorker = member;
  }

  getWeekdayWorker() {
    const worker = this.#weekdayMembers[this.#pickingWeekdayIndex];

    if (this.isSerialWorking(worker)) {
      this.switchWeekdayWorker();
      const worker = this.#weekdayMembers[this.#pickingWeekdayIndex];
      return worker;
    }

    return worker;
  }

  getHolidayWorder() {
    const worker = this.#holidayMembers[this.#pickingHolidayIndex];

    if (this.isSerialWorking(worker)) {
      this.switchHolidayWorker();
      const worker = this.#holidayMembers[this.#pickingHolidayIndex];
      return worker;
    }

    return worker;
  }

  switchWeekdayWorker() {
    const updated = swapWithNext(this.#weekdayMembers, this.#pickingWeekdayIndex);
    this.#weekdayMembers = updated;
  }

  switchHolidayWorker() {
    const updated = swapWithNext(this.#holidayMembers, this.#pickingHolidayIndex);
    this.#holidayMembers = updated;
  }

  isSerialWorking(worker) {
    return worker.getName() === this.#previousWorker?.getName();
  }

  isHoliday(date) {
    const isHolidayBool = isHoliday(this.#month, date);
    const isWeekendBool = this.isWeekend(date);
    return isHolidayBool || isWeekendBool;
  }

  getDayString(date) {
    const day = this.getDayIndex(date);
    const dayString = this.#dayStandard[day];
    return dayString;
  }

  getDayIndex(date) {
    // 요일을 수로 반환 ex. 월: 0, 화: 1 ...
    return !(date % 7) ? 6 : (date % 7) - 1;
  }

  isWeekend(date) {
    const day = this.getDayString(date);
    return WEEKEND.includes(day);
  }

  increasePickingWeekdayIndex() {
    const maxIndex = this.#weekdayMembers.length - 1;
    const updatedIndex = this.#pickingWeekdayIndex === maxIndex ? 0 : this.#pickingWeekdayIndex + 1;
    this.#pickingWeekdayIndex = updatedIndex;
  }

  increasePickingHolidayIndex() {
    const maxIndex = this.#holidayMembers.length - 1;
    const updatedIndex = this.#pickingHolidayIndex === maxIndex ? 0 : this.#pickingHolidayIndex + 1;
    this.#pickingHolidayIndex = updatedIndex;
  }
}

export default Planner;
