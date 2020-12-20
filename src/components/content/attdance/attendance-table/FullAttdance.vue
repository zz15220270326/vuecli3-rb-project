<template>
  <div class="full-attdance">
    <full-menu :menuItems="menuItems" @searchTable="searchTable" />
    <Title :yearAndMonth="yearAndMonth" :identify="identify" />
    <AttdanceReminder :detailInfo="detailInfo" :cardDate="cardDate" />
    <Content :titleList="dayList" :renderItems="renderList" />
  </div>
</template>

<script>
// ? import components
// ??. child components
const FullMenu = () => import('./menu/FullMenu')

import Title from './children/Title'
import Content from './children/Content'
import AttdanceReminder from './children/AttdanceReminder'
// ? import functions
// ? 1. date-functions
// import { getDays, getWeekDays } from '@utils/changeTime'
// ? pickColor by tag-name
// import pickColor from '@utils/pickColor'
// ? 2. request-funtions
import { getFullReport } from '@/request/attdance/getAttendanceTableList'
import { getAttdanceCheckInfo } from '@request/attdance/getAttdanceCheckInfo'
// ? store-types
import {
  // GET_DEFAULT_YEAR,
  // GET_DEFAULT_MONTH,
  // GET_DAYS,
  // GET_WEEK_DAY_LIST,
  // GET_ATTDANCE_LIST,
  GET_IS_SHOW
} from '@store/storeType'
// ? mixins
import classMixin from '@mixins/attdance/classMixin'
import dateMixin from '@mixins/attdance/dateMixin'

export default {
  name: 'FullAttdance',
  components: {
    // ? child-components
    FullMenu,

    Title,
    Content,
    AttdanceReminder
  },
  mixins: [classMixin, dateMixin],
  data: () => ({
    // ? 展示的数据列表(data), 包括weekDayList和userInfo
    attdanceList: [],
    // ? 月份总共的天数
    detailInfo: [],
    cardDate: '',
    identify: '全员'
  }),

  computed: {
    classIds() {
      // ? 虚拟存储classIds的值
      return this.$store.state.classIds
    },
    teacherName() {
      return this.$store.state.teacherName
    }
  },
  methods: {
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
        this.getFullAttdanceInfo({ teacher_name: this.teacherName })
      } else {
        this.getFullAttdanceInfo()
      }
    },
    /**
     * ! 异步请求的方法
     */
    async getFullAttdanceInfo() {
      // otherParams = {}
      const startTime = this.year + '-' + this.month + '-' + '01'
      const endTime = this.year + '-' + this.month + '-' + this.days

      const result = await getFullReport(
        this.uid,
        this.classIds,
        startTime,
        endTime
      )
      console.log(this.uid, this.classIds, startTime, endTime)
      console.log(result)
      if (result.data) {
        const { items } = result.data
        const { checking, user } = items
        let attdanceList = []

        for (let index in user) {
          attdanceList.push({
            name: user[index].name,
            uid: user[index].id
          })
          for (let d = 1; d <= this.days; d++) {
            attdanceList[index][`day${d}`] = checking[index].data[d - 1].name
          }
        }
        this.renderList = []
        this.renderList[0] = this.weekDayList[0]
        this.renderList.push(...attdanceList)
        // console.log(this.renderList)
      }
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
    }
  },
  /**
   * ! life-hooks
   */
  created() {
    this.yearAndMonth = this.storeSelectMonth
    this.requestMenu()
    this.getFullAttdanceInfo()
  }
}
</script>

<style lang="less" scoped>
.full-attdance {
  background-color: #f6f6f6;
  width: 100%;
  margin-top: 2.5rem;
}
</style>
