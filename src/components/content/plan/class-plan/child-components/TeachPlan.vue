<template>
  <div class="teach-plan">
    <!-- 教学计划-最上面的菜单 -->
    <teach-query-menu
      :classTitle="classTitle"
      :classInfo="classInfo"
      @handleSelectClass="handleSelectClass"
      :yearTitle="yearTitle"
      :yearInfo="yearInfo"
      @handleSelectYear="handleSelectYear"
      :semesterTitle="semesterTitle"
      :semesterInfo="semesterInfo"
      @handleSelectSemester="handleSelectSemester"
      :weekTimeTitle="weekTimeTitle"
      :weekTimeInfo="weekTimeInfo"
      @handleSelectWeekDay="handleSelectWeekDay"
      :evaluateTitle="evaluateTitle"
      :evaluateInfo="evaluateInfo"
      @handleSelectEvaluate="handleSelectEvaluate"
      :operations="operations"
      @handleAll="handleAll"
      @addTeachPlan="addTeachPlan"
    />
    <!-- 创建教学计划-Modal -->
    <Modal
      v-model="isShowCreateModal"
      class="create-plan-modal"
      :title="modalTitle"
      width="1000"
      ok-text="提交"
      @on-ok="submitCreatePlan"
      @on-cancel="cancelCreatePlan"
      cancel-text="取消"
      :transfer="false"
    >
      <add-teach-plan
        :yearTitle="yearTitle"
        :yearInfo="yearInfo"
        @handleSelectYear="handleSelectYear"
        :semesterTitle="semesterTitle"
        :semesterInfo="semesterInfo"
        @handleSelectSemester="handleSelectSemester"
        :weekTimeTitle="weekTimeTitle"
        :weekTimeInfo="weekTimeInfo"
        @handleSelectWeekDay="handleSelectWeekDay"
        :classTitle="classTitle"
        :classInfo="classInfo"
        @handleSelectClass="handleSelectClass"
        :seasonTitle="seasonTitle"
        :seasonInfo="seasonInfo"
        @handleSelectSeason="handleSelectSeason"
        :modalButtonGroup="modalButtonGroup"
        :workDays="workDays"
        @selectWeekDay="selectWeekDay"
        :noonList="noonList"
        @selectNoon="selectNoon"
        :teachPlanTitle="teachPlanTitle"
        :teachPlanContent="teachPlanContent"
        :teachPlanContent2="teachPlanContent2"
        @selectPlan="selectPlan"
        :setPlanList="setPlanList"
      />
    </Modal>
    <!-- 教学计划详情弹窗 -->
    <Modal
      v-model="isShowDetailModal"
      class="check-detail-modal"
      title="详情"
      width="1000"
    >
      <DetailTeachPlan
        :firstTitle="firstTitle"
        :secondTitle="secondTitle"
        :titleList="detailTitle"
        :dataList="detailContent"
      />
    </Modal>
    <!-- 计划表格 -->
    <PlanTable
      :tableTitle="tableTitle"
      :tableContent="tableContent"
      @handleOperations="handleOperations"
      :isLoading="isLoading"
      @getSelectItem="getSelectItem"
    />
  </div>
</template>

<script>
// ! 教学计划
// ? common / content components
// ? 1. query-menu
// import Querymenu from '@content/query-menu/Querymenu'
// ? 2. select-menu
// import SelectMenu from '@content/select-menu/SelectMenu'
// ? 3. plan-table
import PlanTable from '@content/plan/PlanTable'
// ? child-components
import TeachQueryMenu from './teach-child/TeachQueryMenu'
import AddTeachPlan from './teach-child/AddTeachPlan'
import DetailTeachPlan from './teach-child/DetailTeachPlan'
// ! import mock-data
import { mockTeachData } from '@mock/plan/teach-plan/teachPlan'

export default {
  name: 'TeachPlan',
  components: {
    // ? common / content components
    // Querymenu,
    // SelectMenu,
    PlanTable,
    // ? child-components
    TeachQueryMenu,
    AddTeachPlan,
    DetailTeachPlan
    // TeachPlanTable
  },
  data: () => ({
    // ? 班级信息
    classTitle: '',
    classInfo: [],
    // ? 学年信息
    yearTitle: '',
    yearInfo: [],
    // ? 学期信息
    semesterTitle: '',
    semesterInfo: [],
    // ? 周次信息
    weekTimeTitle: '',
    weekTimeInfo: [],
    // ? 点评信息
    evaluateTitle: '',
    evaluateInfo: [],
    // ? 时间方案信息
    seasonTitle: '',
    seasonInfo: [],
    // ? 总体操作信息
    operations: [],
    // ? 显示的content表格信息
    tableTitle: [],
    tableContent: [],
    // ? 是否设置loading状态
    isLoading: false,
    selectItem: [],
    // ? 是否显示创建计划Modal
    isShowCreateModal: false,
    // ? 是否显示计划详情Modal
    isShowDetailModal: false,
    // ? 设置计划modal的标题
    modalTitle: '',
    // ? 设置modal中的触发小modal的按钮
    modalButtonGroup: [],
    setPlanList: [],
    // ? 模拟周一到周五
    workDays: [],
    // ? 选择上午还是下午
    noonList: [],
    chooseWorkDayIndex: 0,
    chooseNoonIndex: 0,
    // ? 教学计划时间表标题
    teachPlanTitle: [],
    // ? 计划类型选择菜单
    planTypeTitle: '',
    planTypeInfo: [],
    // ? 教学计划时间表内容
    teachPlanContent: [],
    teachPlanContent2: [],
    // ? 15. 详情中的数据
    // ? 标题
    firstTitle: '',
    secondTitle: '',
    // ? 15.2 存储列表的数据类型
    detailTitle: [],
    detailContent: []
  }),
  methods: {
    mockInitData() {
      const {
        // ? 1. 班级信息
        classTitle,
        classInfo,
        // ? 2. 学年信息
        yearTitle,
        yearInfo,
        // ? 3. 学期信息
        semesterTitle,
        semesterInfo,
        // ? 4. 周次信息
        weekTimeTitle,
        weekTimeInfo,
        // ? 5. 点评信息
        evaluateTitle,
        evaluateInfo,
        // ? 6. 时间方案信息
        seasonTitle,
        seasonInfo,
        // ? 7. 总体操作信息
        operations,
        // ? 8. 显示的content表格信息
        tableTitle,
        tableContent,
        // ? 9. 设置modal中的触发小modal的按钮
        modalButtonGroup,
        setPlanList,
        // ? 10. 模拟周一到周五
        workDays,
        // ? 11. 选择上午还是下午
        noonList,
        // ? 12. 教学计划时间表标题
        teachPlanTitle,
        // ? 13. 计划类型选择菜单
        planTypeTitle,
        planTypeInfo,
        // ? 14. 教学计划时间表内容
        teachPlanContent,
        teachPlanContent2,
        // ? 15
        detailTitle,
        detailContent
      } = mockTeachData
      this.classTitle = classTitle
      this.classInfo = classInfo

      this.yearTitle = yearTitle
      this.yearInfo = yearInfo

      this.semesterTitle = semesterTitle
      this.semesterInfo = semesterInfo

      this.weekTimeTitle = weekTimeTitle
      this.weekTimeInfo = weekTimeInfo

      this.evaluateTitle = evaluateTitle
      this.evaluateInfo = evaluateInfo

      this.seasonTitle = seasonTitle
      this.seasonInfo = seasonInfo

      this.operations = operations

      this.tableTitle = tableTitle
      this.tableContent = tableContent

      this.modalButtonGroup = modalButtonGroup
      this.setPlanList = setPlanList

      this.workDays = workDays

      this.noonList = noonList

      this.teachPlanTitle = teachPlanTitle

      this.planTypeTitle = planTypeTitle
      this.planTypeInfo = planTypeInfo

      this.teachPlanContent = teachPlanContent
      this.teachPlanContent2 = teachPlanContent2

      this.detailTitle = detailTitle
      this.detailContent = detailContent
    },
    handleSelectClass(item) {
      this.classTitle = item
    },
    handleSelectYear(item) {
      this.yearTitle = item
    },
    handleSelectSemester(item) {
      this.semesterTitle = item
    },
    handleSelectWeekDay(item) {
      this.weekTimeTitle = item
    },
    handleSelectEvaluate(item) {
      this.evaluateTitle = item
    },
    handleSelectSeason(item) {
      this.seasonTitle = item
    },
    handleOperations(tag, selectIndex, table) {
      switch (tag) {
        case '详情':
          this.$Message.info('查看详情')
          setTimeout(() => {
            this.firstTitle = this.tableContent[selectIndex].planSemester
            this.secondTitle = this.tableContent[selectIndex].createTime
            this.isShowDetailModal = true
          }, 300)
          break
        case '编辑':
          this.$Message.info('编辑内容')
          setTimeout(() => {
            this.modalTitle = '编辑'
            this.isShowCreateModal = true
          }, 300)
          break
        case '导出':
          this.$Message.success(`导出第${selectIndex + 1}条内容`)
          table.exportCsv({
            filename: `表格第${selectIndex + 1}条数据`,
            data: this.tableContent[selectIndex],
            original: false
          })
          break
        case '删除':
          this.$Modal.confirm({
            title: '删除这一条信息',
            content: '您是否要删除这一条记录? 删除后数据无法恢复!',
            onOk: () => {
              this.tableContent.splice(selectIndex, 1)
              this.$Message.success('删除成功')
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
      }
    },
    getSelectItem(selection) {
      this.selectItem = selection
    },
    selectPlan(params) {
      const { currentItem, currentIndex } = params
      this.teachPlanContent[currentIndex].planType.planTypeTitle = currentItem
    },
    handleAll(info) {
      switch (info) {
        case '查询':
          this.isLoading = true
          setTimeout(() => {
            this.isLoading = false
            this.$Message.success('查询计划成功')
          }, 800)
          break
        case '删除':
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择要删除的计划项')
          } else {
            this.$Modal.confirm({
              title: '删除表格中选中的信息',
              content: '您是否要删除这些已经选中的信息? 删除后数据无法恢复!',
              onOk: () => {
                let newTableContent = this.tableContent.filter(item1 =>
                  this.selectItem.every(item2 => item1.number !== item2.number)
                )
                this.tableContent = newTableContent
                this.$Message.error('删除成功')
              },
              onCancel: () => {
                this.$Message.warning('您取消了本次操作')
              }
            })
          }
          break
      }
    },
    addTeachPlan() {
      this.modalTitle = '创建教学计划'
      this.isShowCreateModal = true
      // setTimeout(() => {
      //   this.isShowCreateModal = false
      // }, 500)
    },
    selectWeekDay(currentIndex) {
      this.workDays.forEach((item, index) =>
        index === currentIndex
          ? (item.isSelected = true)
          : (item.isSelected = false)
      )
      this.chooseWorkDayIndex = currentIndex
    },
    selectNoon(currentIndex) {
      this.noonList.forEach((item, index) =>
        index === currentIndex
          ? (item.isSelected = true)
          : (item.isSelected = false)
      )
      this.chooseNoonIndex = currentIndex
    },
    submitCreatePlan() {
      if (this.yearTitle === '请选择学年') {
        this.$Message.error('提交失败, 您没有填写学年信息')
        return
      }
      if (this.semesterTitle === '全部学期') {
        this.$Message.error('提交失败, 您没有填写学期信息')
        return
      }
      if (this.weekTimeTitle === '请选择周次') {
        this.$Message.error('提交失败, 您没有填写周次信息')
        return
      }
      if (this.classTitle === '全部班级') {
        this.$Message.error('提交失败, 您没有填写班级信息')
        return
      }
      this.mockInitData()
      this.$Message.success('提交信息成功')
    },
    cancelCreatePlan() {
      this.$Message.warning('您取消了本次操作')
    }

    /**
     * ! async functions
     */
  },
  created() {
    setTimeout(() => {
      this.mockInitData()
    }, 300)
    console.log('Teach plan component created')
  }
}
</script>

<style lang="less" scoped>
.teach-plan {
  // background-color: red;
  // height: 70vh;
  .create-plan-modal {
    background-color: #fff;
  }
}
</style>
