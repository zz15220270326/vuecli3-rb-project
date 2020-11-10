import Vue from 'vue'
import Vuex from 'vuex'
// mutations & actions
import mutations from './mutations'
import actions from './actions'

// init-functions
import {transformToYM} from '@/utils/changeTime'

// install vuex
Vue.use(Vuex)
Vue.config.devtools = true

// state
const state = {
  // 模拟身份
  identify: '院长',
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
  // 虚拟存储: uid classIds(真实的数据是在登录的时候获取)
  uid: 122,
  classIds: '54',
  teacherName: '',
  // 设置开始的年月日, 结束的年月日
  startTime: '',
  endTime: ''
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
