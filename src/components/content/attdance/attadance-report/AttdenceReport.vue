<template>
  <div class="attdence-report">
    <!-- 考勤报表 -->
    <div class="title">
      <AttdanceReportMenu :menuItems="menuItems" @searchTable="searchTable" />
    </div>
    <div class="content">
      <!-- 统计报表 -->
      <!-- 一般不带树形结构弹窗 -->
      <Modal
        v-model="isRenderReminder"
        :title="renderReminderTitle"
        :mask-closable="false"
        width="30%"
        @on-ok="closeModal"
        @on-cancel="closeModal"
        :transfer="false"
      >
        <AttdanceReminder
          :renderReminderItems="renderReminderItems"
          :renderReminderItemsInfo="renderReminderItemsInfo"
        />
      </Modal>
      <ReportTableContent
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
// ?import times-function
import { dateToMs, transformToYM } from '@/utils/changeTime'
// ? import request-function
// import { getStaticTableInfo } from '@/request/attdance/getAttdenceReportInfo'
// ? import components
// ? childs-components
const AttdanceReportMenu = () => import('./all-children/AttdanceReportMenu')
const AttdanceReminder = () => import('./all-children/AttdanceReminder')
const ReportTableContent = () => import('./all-children/ReportTableContent')
// ? import mixins
import classMixin from '@mixins/attdance/classMixin'
import allReportMixin from '@mixins/attdance/reportMixin'

export default {
  name: 'AttdenceReport',
  components: {
    // ? children
    AttdanceReportMenu,
    AttdanceReminder,
    ReportTableContent
  },
  mixins: [classMixin, allReportMixin],
  data: () => ({
    subMenu: '全员教师',
    inputValue: '',
    year: 2020,
    month: 11,
    shouldArriveDayParams: {},
    isRenderReminder: false,
    renderReminderItems: {
      info: []
    },
    renderReminderItemsInfo: [],
    renderReminderTitle: ''
  }),
  computed: {
    identify() {
      return this.$store.state.identify
    },
    // uid() {
    //   // ? 虚拟存储的uid的值
    //   return this.$store.state.uid
    // },
    // classIds() {
    //   // 虚拟存储classIds的值
    //   return this.$store.state.classIds
    // },
    // teacherName() {
    //   return this.$store.state.teacherName
    // },
    // startTime() {
    //   return this.$store.state.startTime
    // },
    // endTime() {
    //   return this.$store.state.endTime
    // },
    storeSelectMonth() {
      // return this.storeSelectMonth
      return this.$store.state.selectMonth
    },
    yearAndMonth() {
      // '年-月'
      const time = this.storeSelectMonth
      const timestamp = dateToMs(time)
      return transformToYM(timestamp).toString()
    }
  },
  methods: {
    handleShouldArriveDays(params) {
      this.renderReminderTitle = '应到'
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
    /***
     * ! 抽取的处理的
     */
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
              title: params.info[index].name + '    ' + params.info[0].time,
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
    // ! 关闭Modal时触发
    closeModal() {
      this.isRenderReminder = false
      this.renderReminderTitle = ''
      this.renderReminderItems = {
        info: []
      }
    }
    // !!!! 请求的方法 !!!!
    // async requestTable() {
    //   const startTime = this.year + '-' + this.month + '-' + '01'
    //   const endTime = this.year + '-' + this.month + '-' + 30
    //   const result = await getStaticTableInfo(
    //     this.uid,
    //     this.classIds,
    //     startTime,
    //     endTime
    //   )
    //   const { msg } = result
    //   if (msg === 'Success') {
    //     const { header } = result.data.items
    //     const { data } = result.data.items
    //     // console.log(data)
    //     this.tableTitlesArr.push(...header)
    //     this.tableContentArr.push(...data)
    //   }
    // }
  },
  /**
   * life-hooks
   **/
  created() {
    // this.requestTable()
  }
}
</script>

<style lang="less" scoped>
.attdence-report {
  margin-top: 1.2rem;
  .title {
    width: 100%;
    height: 2rem;
  }
  .content {
    margin-top: 6rem;
    position: relative;
  }
}
</style>
