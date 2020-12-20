// ? 考勤明细 --- 日期相关的操作
// ? store-types
import {
  GET_DEFAULT_YEAR,
  GET_DEFAULT_MONTH,
  GET_DAYS,
  GET_WEEK_DAY_LIST,
} from '@store/storeType'
// ? date-functions
import { getDays, getWeekDays } from '@utils/changeTime'
// ? pickColor by tag-name
import pickColor from '@utils/pickColor'

export default {
  data() {
    return {
      // ? Y,M,D,Y-M, Ds 
      year: 0,
      month: 0,
      day: 0,
      yearAndMonth: '',
      days: 0,
      weekDayList: [],
      dayList: [],
      renderList: []
    }
  },
  computed: {
    storeSelectMonth() {
      return this.$store.state.selectMonth
    },
    uid() {
      // ? 虚拟存储的uid的值
      return this.$store.state.uid
    },
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
      dayList[0] = {
        title: '姓名和日期',
        key: 'name',
        width: '150px',
        align: 'center',
        fixed: 'left'
      }
      for (let i = 0; i < this.days; i++) {
        daysArr.push({
          title: `${i + 1}`,
          key: `day${i + 1}`,
          width: 100,
          align: 'center',
          // className: 'table-title'
          render: (h, params) => {
            const { row, column } = params
            if (row[`day${i + 1}`]) {
              const text = row[`day${i + 1}`]
              const color = pickColor(row, i)
              const {uid} = row
              return [
                h(
                  'div',
                  {
                    props: {},
                    style: {
                      color
                    },
                    on: {
                      click: () => {
                        if (column.title * 1 < 10) {
                          const date = this.year + '-' + this.month +'-' + '0' + column.title
                          this.handleModal(text, uid, date)
                        } else {
                          const date = this.year + '-' + this.month + '-' + column.title
                          this.handleModal(text, uid, date)
                        }
                      }
                    },
                  },
                  text
                )
              ]
            } else {
              return h('div', '...')
            }
          }
        })
      }
      // ? 存储天数
      daysArr.map(item => dayList.push(item))
      this.$store.dispatch('getDayList', dayList)
      this.dayList = dayList
    },
    // ? 根据年-月-日设置星期
    setMonthWeeks() {
      // 设置两个中间变量以及第一项的默认变量
      let weeksInfo = {}
      let setWeekInfo = {}
      let weekDayList = []
      for (let i = 0; i < this.days; i++) {
        weeksInfo[`day${i + 1}`] = getWeekDays(this.year + '-' + this.month + '-' + `${i + 1}`)
      }
      setWeekInfo = {
        ...weeksInfo,
        name: ''
      }
      weekDayList.push(setWeekInfo)
      this.$store.dispatch(GET_WEEK_DAY_LIST, weekDayList)
      this.weekDayList = weekDayList
    },
    handleModal(text, uid, date) {
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
  },
  created() {
    this.getYMDandDays()
    this.updateTitleAndDays()
    this.setMonthDays()
    this.setMonthWeeks()
  }
}
