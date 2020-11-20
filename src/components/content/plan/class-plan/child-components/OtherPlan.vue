<template>
  <div class="other-plan">
    <other-query-menu
      :classTitle="classTitle"
      :classInfo="classInfo"
      @handleSelectClass="handleSelectClass"
      :evaluateTitle="evaluateTitle"
      :evaluateInfo="evaluateInfo"
      @handleSelectEvaluate="handleSelectEvaluate"
      @searchItems="searchItems"
      @deleteItems="deleteItems"
      @createPlan="createPlan"
    />
    <Modal
      class="create-plan-modal"
      v-model="isShowAddPlan"
      title="创建计划"
      ok-text="确认创建"
      @on-ok="createSuccess"
      cancel-text="取消创建"
      @on-cancel="cancelCreate"
      width="750"
      :transfer="isInBody"
    >
      <AddPlan
        :inputTitle="inputTitle"
        :classTitle="classTitle"
        :classInfo="classInfo"
        @handleSelectClass="handleSelectClass"
        :inputContent="inputContent"
        @inputTitleChange="inputTitleChange"
        @inputContentChange="inputContentChange"
      />
    </Modal>
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
// ? common / content components
// ? plan-table
const PlanTable = () => import('@content/plan/PlanTable')
// ? child-components
import OtherQueryMenu from './other-child/OtherQueryMenu'
import AddPlan from './other-child/AddPlan'
// ? mockData
import { mockOtherData } from '@mock/plan/other-plan/otherPlan'
export default {
  name: 'OtherPlan',
  components: {
    // ? common / content components
    PlanTable,
    // ? child-components
    OtherQueryMenu,
    AddPlan
  },
  data: () => ({
    // ? 班级信息
    classTitle: '',
    classInfo: [],
    evaluateTitle: '',
    evaluateInfo: [],
    // ? 学年信息
    yearTitle: '',
    yearInfo: [],
    // ? 学期信息
    semesterTitle: '',
    semesterInfo: [],
    tableTitle: [],
    tableContent: [],
    isShowAddPlan: false,
    isInBody: false,
    inputTitle: '',
    inputContent: '',
    isLoading: false,
    selectItem: []
  }),
  computed: {
    identify() {
      return this.$store.state.identify
    }
  },
  methods: {
    mockInitData() {
      const {
        classTitle,
        classInfo,
        evaluateTitle,
        evaluateInfo,
        yearTitle,
        yearInfo,
        semesterTitle,
        semesterInfo,
        tableTitle,
        tableContent
      } = mockOtherData
      setTimeout(() => {
        this.classTitle = classTitle
        this.classInfo = classInfo

        this.evaluateTitle = evaluateTitle
        this.evaluateInfo = evaluateInfo

        this.yearTitle = yearTitle
        this.yearInfo = yearInfo

        this.semesterTitle = semesterTitle
        this.semesterInfo = semesterInfo

        this.tableTitle = tableTitle
        this.tableContent = tableContent
      }, 300)
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
    handleSelectEvaluate(item) {
      this.evaluateTitle = item
    },
    handleOperations(tag, selectIndex, table) {
      switch (tag) {
        case '详情':
          this.$Message.success('查看详情')
          break
        case '编辑':
          this.$Message.success('编辑内容')
          break
        case '导出':
          this.$Message.success(`导出第${selectIndex}条内容`)
          table.exportCsv({
            filename: `表格第${selectIndex}条数据`,
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
    inputTitleChange(inputValue) {
      this.inputTitle = inputValue
    },
    inputContentChange(inputValue) {
      this.inputContent = inputValue
    },
    createPlan() {
      this.$Message.info('正在创建计划...')
      setTimeout(() => {
        this.isShowAddPlan = true
      }, 300)
    },
    createSuccess() {
      if (this.inputTitle === '') {
        this.$Message.warning('新建失败, 您还没有写标题标题')
      } else if (this.classTitle === '全部班级') {
        this.$Message.warning('新建失败, 您没有填写班级信息')
      } else if (this.inputContent.length < 20) {
        this.$Message.warning('新建失败, 输入的计划内容不得少于20字哦')
      } else {
        let newItem = {}
        newItem.number = this.tableContent.length + 1
        newItem.title = this.inputTitle
        newItem.class = this.classTitle
        newItem.status = '待点评'
        newItem.presenter = this.identify
        newItem.createTime = '2020-11-17 14:20:00'
        newItem.operations = [
          {
            tag: '详情',
            type: 'info'
          },
          {
            tag: '编辑',
            type: 'primary'
          },
          {
            tag: '导出',
            type: 'success'
          },
          {
            tag: '删除',
            type: 'error'
          }
        ]
        this.tableContent.push(newItem)
        this.$Message.success('创建成功')
      }
      // 操作完成后初始化数据
      this.yearTitle = '请选择学年'
      this.semesterTitle = '全部学期'
      this.classTitle = '全部班级'
      this.inputTitle = ''
      this.inputContent = ''
    },
    cancelCreate() {
      this.$Message.info('您取消了本次操作')
      // 操作完成后初始化数据
      this.yearTitle = '请选择学年'
      this.semesterTitle = '全部学期'
      this.classTitle = '全部班级'
      this.inputTitle = ''
      this.inputContent = ''
    },
    searchItems() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$Message.success('查询计划成功')
      }, 800)
    },
    getSelectItem(selection) {
      this.selectItem = selection
    },
    deleteItems() {
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
    }
  },
  created() {
    this.mockInitData()
  }
}
</script>

<style lang="less" scoped>
.other-plan {
  .create-plan-modal {
    // add-plan
  }
}
</style>
