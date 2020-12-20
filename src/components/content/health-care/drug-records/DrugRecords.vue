<template>
  <div class="drug-records">
    <d-r-menu
      :classTitle="classTitle"
      :classList="classList"
      :operations="operations"
      @selectClass="selectClass"
      @handleOperations="handleOperations"
      @handleExport="handleExport"
    />
    <h-c-table
      :titleList="titleList"
      :dataList="dataList"
      :tableIsLoading="tableIsLoading"
      @getSelectItem="getSelectItem"
      @getTable="getTable"
      @handleTableItem="handleTableItem"
    />
    <!-- modal-content -->
    <Modal
      v-model="isShowInfoModal"
      :title="modalTitle"
      width="800"
      :footer-hide="true"
      @on-cancel="cancelModal"
    >
      <info
        :name="name"
        :sinkDesc="sinkDesc"
        :drugName="drugName"
        :usage="usage"
        :drugTime="drugTime"
        :drugCircle="drugCircle"
        :note="note"
        :time="time"
      />
    </Modal>
    <Modal
      v-model="isShowUseDrugModal"
      :title="modalTitle"
      width="800"
      ok-text="发布"
      cancel-text="取消"
      @on-cancel="cancelModal"
    >
      <use-drug :drugTime="drugTime" :note="note" />
    </Modal>
    <Modal
      v-model="isShowRecordModal"
      :title="modalTitle"
      width="800"
      :footer-hide="true"
      @on-cancel="cancelModal"
    >
      <record :recordList="recordList" />
    </Modal>
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? import components
// ? common-components
const DividePage = () => import('@common/divide-page/DividePage')
// ? child-components
const DRMenu = () => import('./child-components/DRMenu')
const HCTable = () => import('../HCTable')
// ? child-modal
const Info = () => import('./child-components/modal/Info')
const UseDrug = () => import('./child-components/modal/UseDrug')
const Record = () => import('./child-components/modal/Record')

// ? mock-data
const mockClassList = require('@mock/health-care/mockClassList')
const mockRecordList = require('@mock/health-care/mockRecordList')

export default {
  name: 'DrugRecords',
  components: {
    DividePage,

    DRMenu,
    HCTable,

    Info,
    UseDrug,
    Record
  },
  data: () => ({
    // ? menu-data
    classTitle: '',
    classList: [],
    operations: [],
    // ? table-data
    titleList: [],
    dataList: [],
    tableIsLoading: false,
    selectItem: [],
    thisTable: {},
    // ? modal-data
    modalTitle: '',
    isShowInfoModal: false,
    drugName: '',
    drugCircle: '',
    drugTime: '',
    name: '',
    sinkDesc: '',
    usage: '',
    note: '',
    time: '',
    teacher: '',
    recordList: [],
    isShowUseDrugModal: false,
    isShowRecordModal: false,
    // ? page-data
    totalPage: 0
  }),
  methods: {
    // ? menu-functions
    getMenuData() {
      this.getClassData()
      this.initOperations()
    },
    initOperations() {
      this.operations = [
        {
          tag: '查询',
          type: 'primary'
        },
        {
          tag: '删除',
          type: 'error'
        }
      ]
    },
    selectClass(selectClass) {
      this.classTitle = selectClass
    },
    handleOperations(currentIndex) {
      switch (currentIndex) {
        case 0:
          // ? 查询表格操作
          this.tableIsLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.tableIsLoading = false
          }, 1000)
          break
        case 1:
          // ? 删除表格所选项操作
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择要删除的计划项')
          } else {
            this.$Modal.confirm({
              title: '删除表格中选中的信息',
              content: '您是否要删除这些已经选中的信息? 删除后数据无法恢复!',
              onOk: () => {
                let newDataList = this.dataList.filter(item1 =>
                  this.selectItem.every(item2 => item1.number !== item2.number)
                )
                this.dataList = newDataList
                this.$Message.error('删除成功')
              },
              onCancel() {
                this.$Message.warning('您取消了本次操作')
              }
            })
          }
          break
      }
    },
    handleExport() {
      if (this.thisTable !== {}) {
        this.thisTable.exportCsv({
          filename: '默认原始表格'
        })
      }
    },
    // ? table-functions
    getTable(table) {
      this.thisTable = table
    },
    getSelectItem(selectItem) {
      this.selectItem = selectItem
    },
    handleTableItem(itemIndex, buttonIndex) {
      switch (buttonIndex) {
        case 0:
          // ? 详情
          this.name = this.dataList[itemIndex].name
          this.sinkDesc = this.dataList[itemIndex].sinkDesc
          this.drugName = this.dataList[itemIndex].drugName
          this.usage = this.dataList[itemIndex].usage
          this.drugTime = this.dataList[itemIndex].drugTime
          this.drugCircle = this.dataList[itemIndex].drugCircle
          this.note = this.dataList[itemIndex].note
          this.time = this.dataList[itemIndex].time
          this.modalTitle = '详情'
          this.isShowInfoModal = true
          break
        case 1:
          // ? 服药
          this.modalTitle = '服药'
          this.drugTime = this.dataList[itemIndex].drugTime
          this.note = this.dataList[itemIndex].note
          this.isShowUseDrugModal = true
          break
        case 2:
          // ? 记录
          this.modalTitle = '记录'
          this.recordList = []
          this.note = this.dataList[itemIndex].note
          this.time = this.dataList[itemIndex].time
          this.recordList.push({
            note: this.note,
            teacher: this.teacher,
            time: this.time
          })
          this.isShowRecordModal = true
          break
      }
    },
    // ? modal-functions
    cancelModal() {
      this.$Message.info('您关闭了本次对话')
    },
    // ? async functions
    getClassData() {
      setTimeout(() => {
        const result = mockClassList
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const classList = result.data
              classList.map((item, index) => {
                if (index === 0) {
                  this.classTitle = item.info
                }
                this.classList.push(item)
              })
            }
          }
        }
      }, 300)
    },
    getTableData() {
      this.titleList = [
        {
          type: 'selection',
          width: 80,
          align: 'center'
        },
        {
          title: '序号',
          key: 'number',
          width: 100,
          align: 'center'
        },
        {
          title: '幼儿姓名',
          key: 'name',
          align: 'center',
          width: 120
        },
        {
          title: '疾病症状',
          key: 'sinkDesc',
          align: 'center',
          width: 300
        },
        {
          title: '药物名称',
          key: 'drugName',
          align: 'center',
          width: 150
        },
        {
          title: '用法用量',
          key: 'usage',
          align: 'center',
          width: 150
        },
        {
          title: '用药时间',
          key: 'drugTime',
          align: 'center',
          width: 150
        },
        {
          title: '用药周期',
          key: 'drugCircle',
          align: 'center',
          width: 150
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = mockRecordList
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const dataList = result.data
              dataList.map(item =>
                this.dataList.push({
                  drugName: item.drug_name,
                  drugCircle: item.drug_circle,
                  drugTime: item.drug_time,
                  name: item.name,
                  number: item.number,
                  sinkDesc: item.sink_desc,
                  usage: item.usage,
                  note: item.note,
                  time: item.time,
                  operations: [
                    {
                      tag: '详情',
                      type: 'info'
                    },
                    {
                      tag: '服药',
                      type: 'success'
                    },
                    {
                      tag: '记录',
                      type: 'primary'
                    }
                  ]
                })
              )
              this.totalPage = dataList.length
            }
          }
        }
      }, 300)
    }
  },
  /**
   * ! life-hooks
   */
  created() {
    this.getMenuData()
    this.getTableData()
  }
}
</script>

<style lang="less" scoped></style>
