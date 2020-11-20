<template>
  <div class="full-attdance">
    <Querymenu>
      <div class="menu" slot="first">
        <ChoosableMenu :menuItems="menuItems" />
      </div>
      <div class="input" slot="second">
        <SearchInput />
      </div>
      <div class="date" slot="third">
        <SelectMonth />
      </div>
      <div class="search-button" slot="fourth">
        <SearchButton @click.native="searchTable" />
      </div>
    </Querymenu>
    <Title :yearAndMonth="yearAndMonth" :identify="identify" />
    <AttdanceReminder :detailInfo="detailInfo" :cardDate="cardDate" />
    <Content
      :dayList="dayList"
      :weekDayList="weekDayList"
      :attdanceList="attdanceList"
    />
  </div>
</template>

<script>
// ? import components
// ? 1. common/content components
import Querymenu from '@/components/content/query-menu/Querymenu'
import ChoosableMenu from '@/components/common/choosable-menu/ChoosableMenu'
import SearchInput from '@/components/common/search-input/SearchInput'
import SelectMonth from '@content/select-month/SelectMonth'
import SearchButton from '@/components/common/search-button/SearchButton'
// ? 2. child components
import Title from './children/Title'
import Content from './children/Content'
import AttdanceReminder from './children/AttdanceReminder'
// ? import functions
// ? 1. date-functions
import { getDays, getWeekDays } from '@utils/changeTime'
// ? pickColor by tag-name
import pickColor from '@utils/pickColor'
// ? 2. request-funtions
import { getFullReport } from '@/request/attdance/getAttendanceTableList'
import { getMenuInfo } from '@/request/attdance/getAttdenceReportInfo'
import { getAttdanceCheckInfo } from '@request/attdance/getAttdanceCheckInfo'
// ? store-types
import {
  GET_DEFAULT_YEAR,
  GET_DEFAULT_MONTH,
  GET_DAYS,
  GET_WEEK_DAY_LIST,
  GET_ATTDANCE_LIST,
  GET_IS_SHOW
} from '@store/storeType'

export default {
  name: 'FullAttdance',
  components: {
    // ? common-components
    Querymenu,
    ChoosableMenu,
    SearchInput,
    SelectMonth,
    SearchButton,
    // ? child-components
    Title,
    Content,
    AttdanceReminder
  },
  data: () => ({
    menuItems: [],
    // ? 展示的数据列表(data), 包括weekDayList和userInfo
    attdanceList: [],
    // ? 把year month day的默认值设置为0, 然后再生命周期中获取
    year: 0,
    month: 0,
    day: 0,
    yearAndMonth: '',
    // ? 月份总共的天数
    days: 0,
    weekDayList: [],
    dayList: [],
    detailInfo: [],
    cardDate: '',
    identify: '全员'
  }),
  computed: {
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
    },
    teacherName() {
      return this.$store.state.teacherName
    }
  },
  methods: {
    // ? 初始化 year month day days
    getYMDandDays() {
      this.year = this.$store.state.defaultYear
      this.month = this.$store.state.defaultMonth
      this.day = this.$store.state.defaultDay
      this.days = this.$store.state.days
    },
    // ? 更改标题时间
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
              const color = pickColor(row, i)
              const { uid, date } = row[`day${i + 1}`]
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
        username: ''
      }
      weekDayList.push(setWeekInfo)
      this.$store.dispatch(GET_WEEK_DAY_LIST, weekDayList)
      this.weekDayList = weekDayList
    },
    // selectMonth(yearAndMonth) {
    // this.yearAndMonth = yearAndMonth
    /* 从SelectMonth子组件中传递过来的事件 */
    // this.updateTitleAndDays()
    // this.getYMDandDays()
    // this.setMonthDays()
    // this.setMonthWeeks()
    // console.log('selectMonth')
    // if (this.year !== '' && this.day !== '') {
    //   this.getPersonReportList()
    // }
    // },
    searchTable() {
      this.yearAndMonth = this.storeSelectMonth
      this.updateTitleAndDays()
      this.getYMDandDays()
      this.setMonthDays()
      this.setMonthWeeks()
      /**
       * ? update-attdanceList
       */
      if (this.teacherName !== '') {
        this.getFullReportList({ teacher_name: this.teacherName })
      } else {
        this.getFullReportList()
      }
    },
    /**
     * ! 异步请求的方法
     */
    async getFullReportList(otherParams = {}) {
      const startTime = this.year + '-' + this.month + '-' + '01'
      const endTime = this.year + '-' + this.month + '-' + this.days
      const result = await getFullReport(
        this.uid,
        this.classIds,
        startTime,
        endTime,
        otherParams
      )
      // console.log(result)
      const info = result.data.items.data
      let daysArr = []
      let userInfo = []
      for (let day = 1; day <= this.days; day++) {
        daysArr.push(day)
      }
      userInfo = await [...info]
      const attdanceList = [...userInfo]
      this.$store.dispatch(GET_ATTDANCE_LIST, attdanceList)
      this.attdanceList = this.$store.state.attdanceList
    },
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
    async requestMenu() {
      const result = await getMenuInfo(this.uid)
      const { data } = result
      this.menuItems.push(...data)
    }
  },
  /**
   * ! life-hooks
   */
  created() {
    this.yearAndMonth = this.storeSelectMonth
    const dayListDefault = {
      title: '姓名/日期',
      key: 'name'
    }
    this.dayList[0] = dayListDefault
    this.getYMDandDays()
    this.setMonthDays()
    this.setMonthWeeks()
    this.requestMenu()
    this.getFullReportList()
    console.log('created')
  }
}
</script>

<style lang="less" scoped>
.full-attdance {
  background-color: #f6f6f6;
  width: 100%;
  margin-top: 2.5rem;
  .query-menu {
    width: 100%;
    margin: 1.2rem;
    display: flex;
    .menu {
      flex: 1;
      margin-top: 0.9rem;
    }
    .input {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .date {
      flex: 1.5;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .search-button {
      flex: 5;
      margin-top: 0.6rem;
    }
  }
}
</style>
