export default {
  // ! 日期相关的mutations
  getSelectMonth (state, inputValue) {
    state.selectMonth = inputValue
  },
  // 今年 今月 今日
  getDefaultYear (state, year) {
    state.defaultYear = year
  },
  getDefaultMonth (state, month) {
    state.defaultMonth = month
  },
  getDefaultDay (state, day) {
    state.defaultDay = day
  },
  getDays (state, days) {
    state.days = days
  },
  // attdence-info
  getDayList (state, dayList) {
    state.dayList = dayList
  },
  getWeekDayList (state, weekDayList) {
    state.weekDayList = weekDayList
  },
  getAttdanceList (state, attdanceList) {
    state.attdanceList = attdanceList
  },
  getStartTime (state, startTime) {
    state.startTime = startTime
  },
  getEndTime (state, endTime) {
    state.endTime = endTime
  },
}