<template>
  <div class="attdance-detail">
    <!-- 考勤明细重构 -->
    <SelectMonth />
    <Table :columns="header" :data="content" size="small" />
  </div>
</template>

<script>
// common / content components
import SelectMonth from '@content/select-month/SelectMonth'
// times-function
import { transformToYMD, getDays } from '@utils/changeTime'
// request functions
import { getFullReport } from '@request/getAttendanceTableList'
// pickColor
// import pickColor from '@utils/pickColor'

export default {
  name: 'AttdanceDetail',
  components: {
    SelectMonth
  },
  data: () => ({
    // store里面的uid, classIds
    uid: 0,
    classIds: '',
    // 年 / 月 / 日
    yaer: '',
    month: '',
    day: '',
    // 这个月一共有多少天
    days: 0,
    // 展示表格的行 / 内容
    header: [],
    content: []
  }),
  methods: {
    initProfile() {
      // 从store中获取uid / classIds
      this.uid = this.$store.state.uid
      this.classIds = this.$store.state.classIds
      // this.year = this.$store.state.defaultYear
      // this.month = this.$store.state.defaultMonth
      // this.day = this.$store.state.defaultDay
      // this.days = this.$store.state.days
    },
    initTime() {
      /* 获取当前年月日并设置时间变量 */
      const ymd = transformToYMD(Date.parse(new Date()))
      const ymdArr = ymd.split('-')
      this.year = ymdArr[0]
      this.month = ymdArr[1]
      this.day = ymdArr[2]
      this.days = getDays(ymdArr[0], ymdArr[1])
      console.log(this.days)
    },
    resetData() {
      console.log('resetData')
    },
    /* request-methods */
    async getList() {
      const startTime = this.year + '-' + this.month + '-' + '01'
      const endTime = this.year + '-' + this.month + '-' + this.days
      const result = await getFullReport(
        this.uid,
        this.classIds,
        startTime,
        endTime
      )
      let { header, data } = result.data.items
      console.log(header)
      header.map((item, index) => {
        if (index > 0) {
          console.log(item)
        }
      })
      // header.map(item => {
      //   item = {}
      // })
      // data.map(item => {
      //   for (let day = 1; day <= this.days; day++) {
      //     item[`day${day}`] = item[`day${day}`].desc
      //   }
      // })
      console.log(data)
      this.header = header
      this.content = data
    }
  },
  /* life-hooks */
  created() {
    this.initProfile()
    this.initTime()
    this.getList()
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    this.resetData()
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  }
}
</script>

<style scoped></style>
