<template>
  <div class="work-sumary">
    <work-sumary-query-menu
      :classTitle="classTitle"
      :classInfo="classInfo"
      @handleSelectClass="handleSelectClass"
      :operations="operations"
      @handleAdd="handleAdd"
      @handleAll="handleAll"
    />
    <Modal
      v-model="isShowCreateModal"
      class="create-modal"
      :title="modalTitle"
      width="850"
      ok-text="发布"
      cancel-text="取消"
      @on-ok="submitCreatePlan"
      @on-cancel="cancelCreatePlan"
      :transfer="false"
    >
      <AddPlan
        :yearTitle="yearTitle"
        :yearInfo="yearInfo"
        @handleSelectYear="handleSelectYear"
        :classTitle="classTitle"
        :classInfo="classInfo"
        @handleSelectClass="handleSelectClass"
        @inputContentChange="inputContentChange"
      />
    </Modal>
    <plan-table
      :tableTitle="tableTitle"
      :tableContent="tableContent"
      @handleOperations="handleOperations"
      :isLoading="isLoading"
      @getSelectItem="getSelectItem"
    />
  </div>
</template>

<script>
// ? import components
// ? 1. common / content components
const PlanTable = () => import('@content/plan/PlanTable')
// ? 2. child-compoennts
const WorkSumaryQueryMenu = () =>
  import('./child-components/WorkSumaryQueryMenu')
const AddPlan = () => import('./child-components/AddPlan')

// ? import mixins
import classMixins from '@mixins/Common/classMixins'

export default {
  name: 'WorkSumary',
  components: {
    PlanTable,
    WorkSumaryQueryMenu,
    AddPlan
  },
  mixins: [classMixins],
  data: () => ({
    // ? 班级信息
    classTitle: '全部班级',
    classInfo: [
      { info: '全部班级', key: 0 },
      { info: '朗云小班', key: 1 },
      { info: '计算机201', key: 2 },
      { info: '朗云3班中班级', key: 3 },
      { info: 'langyun班级', key: 4 }
    ],
    yearTitle: '请选择学年',
    yearInfo: [
      { info: '请选择学年', key: 0 },
      { info: '2016-2017', key: 1 },
      { info: '2017-2018', key: 2 },
      { info: '2018-2019', key: 3 },
      { info: '2019-2020', key: 4 }
    ],
    inputKeyword: '',
    operations: [
      {
        info: '查询',
        type: 'primary'
      },
      {
        info: '删除',
        type: 'error'
      }
    ],
    modalTitle: '',
    inputContent: '',
    tableTitle: [
      { type: 'selection', width: 60, align: 'center', __id: '9f3LRS' },
      {
        title: '序号',
        key: 'number',
        width: 80,
        align: 'center'
      },
      {
        title: '标题',
        key: 'title',
        align: 'center',
        width: 360
      },
      { title: '班级', key: 'class', width: 100 },
      {
        title: '状态',
        key: 'status',
        align: 'center',
        width: 100
      },
      { title: '发送时间', key: 'createTime', align: 'center', __id: 'fNYtaT' },
      { title: '操作', slot: 'operations', align: 'center', __id: '5zArzW' }
    ],
    tableContent: [
      {
        number: 1,
        title: '2020~2021学年整年计划',
        class: '全园',
        status: '待点评',
        createTime: '2020-10-29 14:43:41',
        operations: [
          { tag: '详情', type: 'info' },
          { tag: '编辑', type: 'primary' },
          { tag: '导出', type: 'success' },
          { tag: '删除', type: 'error' }
        ]
      },
      {
        number: 2,
        title: '2020~2021学年整年计划',
        class: '朗云小班',
        status: '待点评',
        createTime: '2020-10-29 14:30:56',
        operations: [
          { tag: '详情', type: 'info' },
          { tag: '编辑', type: 'primary' },
          { tag: '导出', type: 'success' },
          { tag: '删除', type: 'error' }
        ]
      },
      {
        number: 3,
        title: '2020~2021学年整年计划',
        class: '全园',
        status: '待点评',
        createTime: '2020-10-26 15:10:14',
        operations: [
          { tag: '详情', type: 'info' },
          { tag: '编辑', type: 'primary' },
          { tag: '导出', type: 'success' },
          { tag: '删除', type: 'error' }
        ]
      }
    ],
    selectItem: [],
    isLoading: false,
    isShowCreateModal: false
  }),
  methods: {
    handleSelectClass(item) {
      this.classTitle = item
    },
    handleSelectYear(item) {
      this.yearTitle = item
    },
    getSelectItem(selection) {
      this.selectItem = selection
    },
    inputContentChange(inputValue) {
      this.inputContent = inputValue
    },
    handleAdd() {
      this.modalTitle = '新建总结'
      this.isShowCreateModal = true
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
    submitCreatePlan() {},
    cancelCreatePlan() {}
  }
}
</script>

<style lang="less" scoped>
.work-sumary {
  background-color: #f6f6f6;
}
</style>
