<template>
  <div class="other-plan">
    <other-query-menu
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
      <AddTeachPlanContent
        :inputTitle="inputTitle"
        :inputContent="inputContent"
        @inputTitleChange="inputTitleChange"
        @inputContentChange="inputContentChange"
      />
    </Modal>
    <Modal></Modal>
    <Modal></Modal>
    <PlanTable
      :titleList="tableTitle"
      :dataList="tableContent"
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
import AddTeachPlanContent from '@Plan/AddTeachPlanContent'
// ? mockData
import { mockOtherData } from '@mock/plan/other-plan/otherPlan'
// ? import mixins
export default {
  name: 'OtherPlan',
  components: {
    // ? common / content components
    PlanTable,
    // ? child-components
    OtherQueryMenu,
    AddTeachPlanContent
  },
  data: () => ({
    // ? 学期信息
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
      const { tableTitle, tableContent } = mockOtherData
      setTimeout(() => {
        this.tableTitle = tableTitle
        this.tableContent = tableContent
      }, 300)
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
      this.$Message.success('创建成功')
    },
    cancelCreate() {
      this.$Message.info('您取消了本次操作')
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
    color: #666;
  }
}
</style>
