<template>
  <div class="personal-static">
    <div class="title">
      <attdance-report-menu @searchTable="searchTable" />
    </div>
    <div class="content">
      <Modal
        v-model="isRenderReminder"
        :title="renderReminderTitle"
        :mask-closable="false"
        width="30%"
        @on-ok="closeModal"
        @on-cancel="closeModal"
        :transfer="false"
      >
        <attdance-reminder
          :renderReminderItems="renderReminderItems"
          :renderReminderItemsInfo="renderReminderItemsInfo"
        />
      </Modal>
      <report-table-content
        :tableTitlesArr="tableTitlesArr"
        :tableContentArr="tableContentArr"
        @handleShouldArriveDays="handleShouldArriveDays"
        @handleActuallyArriveDays="handleActuallyArriveDays"
        @handleOvertimeHour="handleOvertimeHour"
        @handleAbsenceTimes="handleAbsenceTimes"
        @handleLeaveHours="handleLeaveHours"
        @handleLateTimes="handleLateTimes"
        @handleEarlyTimes="handleEarlyTimes"
        @handleOutHours="handleOutHours"
      />
    </div>
    <Spin v-show="isLoading" fix>
      <Icon type="ios-loading" size="25" class="demo-spin-icon-load"></Icon>
      <div>重新查询中...</div>
    </Spin>
  </div>
</template>

<script>
// ? import components
const AttdanceReportMenu = () =>
  import('./personal-children/AttdanceReportMenu')
const AttdanceReminder = () => import('./personal-children/AttdanceReminder')
const ReportTableContent = () =>
  import('./personal-children/ReportTableContent')
// ? import times-function
import { dateToMs, transformToYM } from '@/utils/changeTime'
// ? request function
import { getPersonalStaticInfo } from '@/request/attdance/getAttdenceReportInfo'

export default {
  name: 'PersonalReport',
  components: {
    AttdanceReportMenu,
    AttdanceReminder,
    ReportTableContent
  },
  data: () => ({
    tableTitlesArr: [],
    tableContentArr: [],
    year: 2020,
    month: 11,
    isRenderReminder: false,
    isLoading: false,
    renderReminderTitle: '',
    renderReminderItems: {
      info: []
    },
    renderReminderItemsInfo: []
  }),
  computed: {
    identify() {
      return this.$store.state.identify
    },
    uid() {
      // ? 虚拟存储的uid的值
      return this.$store.state.uid
    },
    startTime() {
      return this.$store.state.startTime
    },
    endTime() {
      return this.$store.state.endTime
    },
    storeSelectMonth() {
      return this.$store.state.selectMonth
    },
    yearAndMonth() {
      // '年-月'
      const time = this.storeSelectMonth
      const timestamp = dateToMs(time)
      return transformToYM(timestamp).toString()
    },
    days() {
      return this.$store.state.days
    }
  },
  methods: {
    // ? 分类处理考勤类型
    handleShouldArriveDays(params) {
      this.renderReminderTitle = '应到'
      console.log(params)
      this.handleCommonModal(params)
    },
    handleActuallyArriveDays(params) {
      this.renderReminderTitle = '实到'
      this.handleCommonModal(params)
    },
    handleOvertimeHour(params) {
      this.renderReminderTitle = '加班'
      this.handleTreeModal(params)
    },
    handleAbsenceTimes(params) {
      this.renderReminderTitle = '旷工次数'
      this.handleCommonModal(params)
    },
    handleLeaveHours(params) {
      this.renderReminderTitle = '请假'
      this.handleTreeModal(params)
    },
    handleLateTimes(params) {
      this.renderReminderTitle = '迟到'
      this.handleCommonModal(params)
    },
    handleEarlyTimes(params) {
      this.renderReminderTitle = '早退'
      this.handleTreeModal(params)
    },
    handleOutHours(params) {
      this.renderReminderTitle = '外出'
      this.handleCommonModal(params)
    },
    // ? 分类处理Modal
    handleCommonModal(params) {
      this.renderReminderItems = params
      this.isRenderReminder = true
    },
    handleTreeModal(params) {
      if (params.info.length > 0) {
        let newArr = []
        let newObj = {}
        for (let index in params.info) {
          newObj.title = params.info[index].day
          newObj.expand = true
          newObj.children = [
            {
              title: params.info[index].name + ' ' + params.info[0].time,
              expand: true
            }
          ]
          newArr.push(newObj)
        }
        this.renderReminderItemsInfo = newArr
        this.renderReminderItems = params
        this.isRenderReminder = true
      }
    },
    // ? Modal关闭时触发
    closeModal() {
      this.isRenderReminder = false
      this.renderReminderTitle = ''
      this.renderReminderItems = {
        info: []
      }
    },
    /**
     * !! async function
     */
    async requestTable() {
      const uid = this.uid
      const startTime = this.year + '-' + this.month + '-' + '01'
      const endTime = this.year + '-' + this.month + '-' + this.days.toString()
      const result = await getPersonalStaticInfo(uid, startTime, endTime)
      const { msg } = result
      if (msg === 'Success') {
        const { header } = result.data.items
        const { data } = result.data.items
        // push to title & content
        this.tableTitlesArr.push(...header)
        this.tableContentArr.push(...data)
      } else {
        this.$Message.error('当前网络繁忙, 请稍后再试')
      }
    },
    async searchTable() {
      if (this.startTime === '' || this.endTime === '') {
        this.$Message.info('请填写正确的时间哦')
      } else {
        this.isLoading = true
        this.tableTitlesArr = []
        this.tableContentArr = []
        const uid = this.uid
        const startTime = this.startTime
        const endTime = this.endTime
        const result = await getPersonalStaticInfo(uid, startTime, endTime)
        const { msg } = result
        this.isLoading = false
        if (msg === 'Success') {
          const { header } = result.data.items
          const { data } = result.data.items
          this.tableTitlesArr.push(...header)
          this.tableContentArr.push(...data)
        }
      }
    }
  },
  created() {
    this.requestTable()
  }
}
</script>

<style lang="less" scoped></style>
