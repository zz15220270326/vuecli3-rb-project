<template>
<div class="attendance-table">
  <Title :yearAndMonth="yearAndMonth" :identify="identify" />
  <AttdanceReminder v-if="isShowCard" :detailInfo="detailInfo" :cardDate="cardDate" @closeCard="closeCard" />
  <Content :dayList="dayList" :list1="weekDayList" :list2="attdanceList" />
</div>
</template>

<script>
// request
import {getFullReport} from '@request/getAttendanceTableList'
import {getAttdanceCheckInfo} from '@request/getAttdanceCheckInfo'
// change-time-functions
import {dateToMs, transformToYM, getDays, getWeekDays} from '@utils/changeTime'
// pickColor
import pickColor from '@utils/pickColor'
// store type
import {GET_DEFAULT_YEAR, GET_DEFAULT_MONTH, GET_DAYS} from '@store/storeType'
// child-components
import Title from './children/Title'
import Content from './children/Content'
import AttdanceReminder from './children/AttdanceReminder'

export default {
  name: 'AttendanceTable',
  components: {
    Title,
    Content,
    AttdanceReminder
  },
  data: () => ({
    // 展示的数据列表(data), 包括weekDayList和userInfo
    attdanceList: [],
    // 把year month day的默认值设置为0, 然后再生命周期中获取
    year: 0,
    month: 0,
    day: 0,
    // 月份总共的天数
    days: 0,
    // 月份天数对应的星期几
    weekDayList: [],
    // 获取的数据列表
    userInfo: [],
    dayList: [],
    requestList: [],
    isShowCard: false,
    detailInfo: [],
    cardDate: ''
  }),
  computed: {
    identify () {
      return this.$store.state.identify
    },
    storeSelectMonth () {
      // return this.storeSelectMonth
      return this.$store.state.selectMonth
    },
    yearAndMonth () {
      // '年-月'
      const time = this.storeSelectMonth
      const timestamp = dateToMs(time)
      return transformToYM(timestamp).toString()
    },
    uid () {
      // 虚拟存储的uid的值
      return this.$store.state.uid
    },
    classIds () {
      // 虚拟存储classIds的值
      return this.$store.state.classIds
    }
  },
  methods: {
    // 设置标题中的年和月(created)
    getYMDandDays () {
      // 加载默认的标题和天数
      this.year = this.$store.state.defaultYear
      this.month = this.$store.state.defaultMonth
      this.day = this.$store.state.defaultDay
      this.days = this.$store.state.days
    },
    setYearAndMonth () {
      // 把'年-月'转化成数组
      let ymArr = this.yearAndMonth.split('-')
      // 动态刷新标题
      this.$store.commit(GET_DEFAULT_YEAR, ymArr[0])
      this.$store.commit(GET_DEFAULT_MONTH, ymArr[1])
      // 获取月份中的天数并填入到表格中
      let year = ymArr[0] * 1
      let month = ymArr[1] * 1
      const days = getDays(year, month)
      this.$store.commit(GET_DAYS, days)
    },
    // 根据this.days动态刷新表格月份天数
    setMonthDays () {
      // 清空this.dayList()
      // this.dayList = []
      // 设置两个中间变量以及第一项的默认变量
      let daysArr = []
      let dayList = []
      let dayListDefault = {
        title: '姓名/日期',
        key: 'username',
        width: 80,
        fixed: 'left'
      }
      for (let i = 0; i < this.days; i++) {
        let dayInfo = {
          title: `${i + 1}`,
          key: `day${i + 1}`,
          className: 'table-title',
          render: (h, params) => {
            const row = params.row
            const color = pickColor(row, i)
            const text = row[`day${i + 1}`].desc
            const {uid, date} = row[`day${i + 1}`]
            return h('div', [
              h('div', {
                props: {
                },
                style: {
                  color,
                  'width': '2.6rem',
                  'text-align': 'left',
                  'font-size': '0.8rem',
                  'padding': '0'
                },
                on: {
                  click: async () => {
                    this.handleShowCard(text, uid, date)
                  }
                }
              }, text)
            ])
          }
        }
        daysArr.push(dayInfo)
      }
      // 存储天数
      dayList.push(dayListDefault)
      dayList.push(...daysArr)
      this.$store.dispatch('getDayList', dayList)
      this.dayList = dayList
    },
    // 根据年-月-日设置星期
    setMonthWeeks () {
      // 设置两个中间变量以及第一项的默认变量
      let weeksInfo = {}
      let setWeekInfo = {}
      let weekDayList = []
      // for 获取月份天数, 获取'周几'进行渲染
      for (let i = 0; i < this.days; i++) {
        weeksInfo[`day${i + 1}`] = {
          desc: getWeekDays(this.year + '-' + this.month + '-' + `${i + 1}`)
        }
      }
      // 存储默认第一行数据
      setWeekInfo = {
        ...weeksInfo,
        username: ''
      }
      weekDayList.push(setWeekInfo)
      this.$store.dispatch('getWeekDayList', weekDayList)
      this.weekDayList = weekDayList
    },
    handleRemind () {
      this.isRemind = !this.isRemind
    },
    async handleShowCard (text, uid, date) {
      if (text === '周日' || text === '周一' || text === '周二' || text === '周三' || text === '周四' || text === '周五' || text === '周六') {
        return 0
      } else if (text === '休') {
        this.$Notice.success({
          title: '温馨提示',
          desc: '这一天休息哦'
        })
      } else {
        this.cardDate = date
        const {data} = await getAttdanceCheckInfo(uid, date)
        this.detailInfo = data
        this.isShowCard = true
      }
    },
    closeCard () {
      console.log('closeCard')
      this.isShowCard = false
    },
    /**
     * 异步请求的方法
     */
    async getFullReportList (uid, classIds, startTime, endTime, otherParams = {}) {
      // 122, '54', '2020-11-01', '2020-11-30'
      const result = await getFullReport(uid, classIds, startTime, endTime, otherParams)
      const {items} = result.data
      let daysArr = []
      let userInfo = []
      for (let day = 1; day <= this.days; day++) {
        daysArr.push(day)
      }
      userInfo = await [...items]
      const attdanceList = [...userInfo]
      this.$store.dispatch('getAttdanceList', attdanceList)
      this.weekDayList = this.$store.state.weekDayList
      this.attdanceList = this.$store.state.attdanceList
    },
    getDefaultAttdenceList () {
      // 设置默认请求的参数, 发送响应请求
      const startTime = this.year + '-' + this.month + '-' + '01'
      const endTime = this.year + '-' + this.month + '-' + this.days
      this.getFullReportList(this.uid, this.classIds, startTime, endTime)
    }
  },
  /**
   * ***life-hooks***
   */
  created () {
    const dayListDefault = {
      title: '姓名/日期',
      key: 'username'
    }
    this.dayList[0] = dayListDefault
    this.getYMDandDays()
    this.setMonthDays()
    this.setMonthWeeks()
    this.getDefaultAttdenceList()
    console.log('created')
  },
  beforeMount () {
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    this.setYearAndMonth()
    this.getYMDandDays()
    // console.log(this.days)
    this.setMonthDays()
    this.setMonthWeeks()
    // setTimeout(() => {
    //   this.getDefaultAttdenceList()
    // }, 300)
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  }
}
</script>

<style lang="less" scoped>
.attendance-table {
  background-color: #f6f6f6;
  width: 100%;
}
</style>
