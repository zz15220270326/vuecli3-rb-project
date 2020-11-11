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
  // 模拟项目图标, 用户图标
  avatar: 'http://t.static.langlangyun.com/pcUpload/a39c0c2a17a3c3579a04ef45b1a8fee7?imageView2/1/w/60/h/60',
  projectIcon: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/logo.png',
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
