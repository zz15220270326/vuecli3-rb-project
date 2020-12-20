<template>
  <div class="personal-attdance">
    <!-- 个人考勤报表 -->
    <div class="top-content">
      <SelectMonth />
      <SearchButton @click.native="updateClick" />
    </div>
    <Title :yearAndMonth="yearAndMonth" :identify="identify" />
    <AttdanceReminder :detailInfo="detailInfo" :cardDate="cardDate" />
    <Content
      v-if="attdanceList[attdanceList.length - 1]"
      :dayList="dayList"
      :weekDayList="weekDayList"
      :attdanceList="attdanceList"
    />
  </div>
</template>

<script>
// ? request
import { getPersonReport } from '@request/attdance/getAttendanceTableList'
import { getAttdanceCheckInfo } from '@request/attdance/getAttdanceCheckInfo'
// ? change-time-functions
import { getDays, getWeekDays } from '@utils/changeTime'
// ? pickColor by tag-name
import pickColor from '@utils/pickColor'
// ? store type
import {
  GET_DEFAULT_YEAR,
  GET_DEFAULT_MONTH,
  GET_DAYS,
  GET_WEEK_DAY_LIST,
  GET_ATTDANCE_LIST,
  GET_IS_SHOW
} from '@store/storeType'
// ? child-components
// ? select-month
import SelectMonth from '@common/select-month/SelectMonth'
// ? search-button
import SearchButton from '@common/search-button/SearchButton'
// ? other children
import Title from './children/Title'
import Content from './children/Content'
import AttdanceReminder from './children/AttdanceReminder'

export default {
  name: 'PersonalAttdance',
  components: {
    SelectMonth,
    SearchButton,
    Title,
    Content,
    AttdanceReminder
  },
  data: () => ({
    // ? 展示的数据列表(data), 包括weekDayList和userInfo
    attdanceList: [],
    // ? 把year month day的默认值设置为0, 然后再生命周期中获取
    year: 0,
    month: 0,
    yearAndMonth: '',
    day: 0,
    // ? 月份总共的天数
    days: 0,
    // ? 月份天数对应的星期几
    weekDayList: [],
    // ? 获取的数据列表
    userInfo: [],
    dayList: [],
    requestList: [],
    detailInfo: [],
    cardDate: ''
  }),
  computed: {
    identify() {
      return this.$store.state.identify
    },
    storeSelectMonth() {
      // return this.storeSelectMonth
      return this.$store.state.selectMonth
    },
    uid() {
      // ? 虚拟存储的uid的值
      return this.$store.state.uid
    },
    classIds() {
      // ? 虚拟存储classIds的值
      return this.$store.state.classIds
    }
  },
  methods: {
    // ! 设置标题中的年和月(created)
    getYMDandDays() {
      // ? 从store中获取默认的年 月 日 以及年月天数
      this.year = this.$store.state.defaultYear
      this.month = this.$store.state.defaultMonth
      this.day = this.$store.state.defaultDay
      this.days = this.$store.state.days
      this.yearAndMonth = this.storeSelectMonth
    },
    updateTitleAndDays() {
      // ? 把'年-月'转化成数组
      let ymArr = this.storeSelectMonth.split('-')
      // ? 动态刷新标题
      this.$store.commit(GET_DEFAULT_YEAR, ymArr[0])
      this.$store.commit(GET_DEFAULT_MONTH, ymArr[1])
      // ? 获取月份中的天数并填入到表格中
      let year = ymArr[0] * 1
      let month = ymArr[1] * 1
      const days = getDays(year, month)
      this.$store.commit(GET_DAYS, days)
    },
    // ! 根据this.days动态渲染表格标题以及要显示的表格内容设置(render function)
    setMonthDays() {
      // ? 设置两个中间变量以及第一项的默认变量
      let daysArr = []
      let dayList = []
      let dayListDefault = {
        title: '姓名/日期',
        key: 'name',
        width: 80,
        fixed: 'left'
      }
      for (let i = 0; i < this.days; i++) {
        let dayInfo = {
          title: `${i + 1}`,
          key: `day${i + 1}`,
          slot: `day${i + 1}`,
          width: 60,
          className: 'table-title',
          render: (h, params) => {
            const row = params.row
            if (row[`day${i + 1}`].name) {
              const text = row[`day${i + 1}`].name
              const { uid, date } = row[`day${i + 1}`]
              const color = pickColor(row, i)
              return [
                h(
                  'div',
                  {
                    props: {},
                    style: {
                      color,
                      width: '5rem',
                      'text-align': 'left',
                      'font-size': '0.8rem',
                      padding: '0'
                    },
                    on: {
                      click: () => {
                        switch (text) {
                          case '正常':
                            this.handleShowCard(text, uid, date)
                            break
                          case '请假':
                            this.handleShowCard(text, uid, date)
                            break
                          case '外出':
                            this.handleShowCard(text, uid, date)
                            break
                          case '加班':
                            this.handleShowCard(text, uid, date)
                            break
                          case '补卡':
                            this.handleShowCard(text, uid, date)
                            break
                          case '迟到':
                            this.handleShowCard(text, uid, date)
                            break
                          case '早退':
                            this.handleShowCard(text, uid, date)
                            break
                          case '旷工':
                            this.handleShowCard(text, uid, date)
                            break
                        }
                      }
                    }
                  },
                  text
                )
              ]
            } else {
              return h('div', '...')
            }
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
    setMonthWeeks() {
      // 设置两个中间变量以及第一项的默认变量
      let weeksInfo = {}
      let setWeekInfo = {}
      let weekDayList = []
      // for 获取月份天数, 获取'周几'进行渲染
      for (let i = 0; i < this.days; i++) {
        weeksInfo[`day${i + 1}`] = {
          name: getWeekDays(this.year + '-' + this.month + '-' + `${i + 1}`)
        }
      }
      // 存储默认第一行数据
      setWeekInfo = {
        ...weeksInfo,
        name: ''
      }
      weekDayList.push(setWeekInfo)
      this.$store.dispatch(GET_WEEK_DAY_LIST, weekDayList)
      this.weekDayList = weekDayList
    },
    updateClick() {
      this.yearAndMonth = this.storeSelectMonth
      this.updateTitleAndDays()
      this.getYMDandDays()
      this.setMonthDays()
      this.setMonthWeeks()
      this.getPersonReportList()
    },
    /**
     * ! 异步请求的方法
     */
    // ! 是否要显示并请求弹窗卡片
    async handleShowCard(text, uid, date) {
      this.cardDate = date
      const { data } = await getAttdanceCheckInfo(uid, date)
      this.detailInfo = data
      this.$store.commit(GET_IS_SHOW, true)
      setTimeout(() => {
        this.$store.commit(GET_IS_SHOW, false)
      }, 800)
    },
    // ! 请求获取"考勤明细"表格
    async getPersonReportList() {
      const startTime = this.year + '-' + this.month + '-' + '01'
      const endTime = this.year + '-' + this.month + '-' + this.days
      const otherParams = {}
      const result = await getPersonReport(
        this.uid,
        this.classIds,
        startTime,
        endTime,
        otherParams
      )
      const info = result.data.items.data
      // console.log(info)
      let daysArr = []
      let userInfo = []
      for (let day = 1; day <= this.days; day++) {
        daysArr.push(day)
      }
      userInfo = await [...info]
      // console.log(userInfo)
      const attdanceList = [...userInfo]
      this.$store.dispatch(GET_ATTDANCE_LIST, attdanceList)
      this.weekDayList = this.$store.state.weekDayList
      this.attdanceList = this.$store.state.attdanceList
    }
  },
  /**
   * !! ***life-hooks*** !!
   */
  created() {
    const dayListDefault = {
      title: '姓名/日期',
      key: 'name'
    }
    this.dayList[0] = dayListDefault
    this.getYMDandDays()
    this.setMonthDays()
    this.setMonthWeeks()
    this.getPersonReportList()
    // console.log('created')
  },
  beforeMount() {},
  mounted() {
    // console.log('mounted')
  },
  beforeUpdate() {
    // console.log('beforeUpdate')
  },
  updated() {
    // console.log('updated')
  }
}
</script>

<style lang="less" scoped>
.personal-attdance {
  background-color: #f6f6f6;
  width: 100%;
  margin-top: 2.5rem;
  .top-content {
    height: 5.4rem;
    background-color: #fff;
  }
}
</style>
