import {transformToYM} from '@/utils/changeTime'

export default {
  // 设置成当前的年月
  selectMonth: transformToYM(Date.parse(new Date())),
  // 默认的: 年 月 日
  defaultYear: '',
  defaultMonth: '',
  defaultDay: '',
  // days in month
  days: 0,
  // dayList weekDayList (async actions)
  dayList: [],
  weekDayList: [],
  attdanceList: [],
  // 设置开始的年月日, 结束的年月日
  startTime: '',
  endTime: ''
}