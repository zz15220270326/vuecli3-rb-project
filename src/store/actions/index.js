// types
import {
  // 选择的月份
  GET_SELECT_MONTH,
  // 默认写入的年月日
  GET_DEFAULT_YEAR,
  GET_DEFAULT_MONTH,
  GET_DEFAULT_DAY,
  GET_DAYS,
  // attdence-info
  GET_DAY_LIST,
  GET_WEEK_DAY_LIST,
  GET_ATTDANCE_LIST,
  // ids-info
  GET_UID,
  GET_CLASS_IDS,
  GET_TEACHER_NAME,
  GET_START_TIME,
  GET_END_TIME
} from '../storeType'

export default {
  getSelectMonth (context, inputValue) {
    context.commit(GET_SELECT_MONTH, inputValue)
  },
  getDefaultYear (context, inputDefaultYear) {
    context.commit(GET_DEFAULT_YEAR, inputDefaultYear)
  },
  getDefaultMonth (context, inputDefaultMonth) {
    context.commit(GET_DEFAULT_MONTH, inputDefaultMonth)
  },
  getDefaultDay (context, inputDefaultDay) {
    context.commit(GET_DEFAULT_DAY, inputDefaultDay)
  },
  getDays (context, inputDays) {
    context.commit(GET_DAYS, inputDays)
  },
  /*     */
  getDayList (context, dayList) {
    context.commit(GET_DAY_LIST, dayList)
  },
  getWeekDayList (context, weekDayList) {
    context.commit(GET_WEEK_DAY_LIST, weekDayList)
  },
  getAttdanceList (context, attdanceList) {
    context.commit(GET_ATTDANCE_LIST, attdanceList)
  },
  /*     */
  getUid (context, paramUid) {
    context.commit(GET_UID, paramUid)
  },
  getClassIds (context, selectClassIds) {
    context.commit(GET_CLASS_IDS, selectClassIds)
  },
  getTeacherName (context, inputTeacherName) {
    context.commit(GET_TEACHER_NAME, inputTeacherName)
  },
  getStartTime (context, inputStartTime) {
    context.commit(GET_START_TIME, inputStartTime)
  },
  getEndTime (context, inputEndTime) {
    context.commit(GET_END_TIME, inputEndTime)
  }
}
