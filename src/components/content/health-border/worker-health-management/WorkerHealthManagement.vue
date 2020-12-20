<template>
  <div class="worker-health-management">
    <worker-menu @menuOperations="menuOperations" @exportTable="exportTable" />
    <div class="content">
      <h-b-table
        :titleList="titleList"
        :dataList="dataList"
        :tableIsLoading="tableIsLoading"
        @getSelectItem="getSelectItem"
        @handleTableItem="handleTableItem"
        @getTable="getTable"
      />
    </div>
    <Modal
      v-model="isShowInfoModal"
      width="800"
      class-name="info-modal"
      :title="modalTitle"
      :footer-hide="true"
      @on-cancel="closeInfoModal"
    >
      <w-h-m-info-content
        :date="date"
        :name="name"
        :temperatue="temperatue"
        :healthStatus="healthStatus"
        :symbol="symbol"
        :touchHistory="touchHistory"
        :registrant="registrant"
      />
    </Modal>
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? import components( 从上到下 )
const WorkerMenu = () => import('./child-components/WorkerMenu')
const HBTable = () => import('@HealthBorder/HBTable')
const WHMInfoContent = () => import('./child-components/WHMInfoContent')
const DividePage = () => import('@common/divide-page/DividePage')
// ? import mixins
import tchStatusTableMixin from '@mixins/health-border/tchStatusTableMixin'

export default {
  name: 'WorkerHealthManagement',
  components: {
    WorkerMenu,
    HBTable,
    WHMInfoContent,
    DividePage
  },
  mixins: [tchStatusTableMixin],
  data: () => ({
    selectItem: [],
    currentTable: {},
    // ? modal-data
    modalTitle: '',
    isShowInfoModal: false,
    date: '',
    name: '',
    temperatue: 0,
    healthStatus: '',
    touchHistory: '',
    symbol: '',
    registrant: ''
  }),
  methods: {
    // ? menu-functions
    menuOperations(index) {
      switch (index) {
        case 0:
          this.tableIsLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.tableIsLoading = false
          }, 600)
          break
        case 1:
          if (this.selectItem.length === 0) {
            this.$Message.warning('请先选择要删除的信息项')
          } else {
            this.$Modal.confirm({
              title: '删除表格中选中的信息',
              content: '您是否要删除这些已经选中的信息? 删除后数据无法恢复!',
              onOk: () => {
                let newDataList = this.dataList.filter(item1 =>
                  this.selectItem.every(item2 => item1.name !== item2.name)
                )
                this.dataList = newDataList
                this.$Message.error('删除成功')
              },
              onCancel() {
                this.$Message.success('您取消了本次操作')
              }
            })
          }
          break
      }
    },
    // ? table-functions
    getSelectItem(selectItem) {
      this.selectItem = selectItem
    },
    handleTableItem(itemIndex, btnIndex) {
      switch (btnIndex) {
        case 0:
          this.$Message.info(`查看第${itemIndex + 1}条信息数据`)
          this.modalTitle = '详情'
          this.isShowInfoModal = true
          this.date = this.dataList[itemIndex].date
          this.name = this.dataList[itemIndex].name
          this.temperatue = this.dataList[itemIndex].temperatue
          this.healthStatus = this.dataList[itemIndex].healthStatus
          this.symbol = this.dataList[itemIndex].symbol
          this.touchHistory = '未接触过' // 后台传递的过往接触史
          this.registrant = '注册人张某'
          break
        case 1:
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}条信息数据`,
            content: '是否删除? 删除后数据无法恢复',
            onOk: () => {
              this.dataList.splice(itemIndex, 1)
              this.$Message.error(`删除成功`)
            },
            onCancel: () => {
              this.$Message.success('您取消了本次操作')
            }
          })
          break
      }
    },
    getTable(table) {
      this.currentTable = table
    },
    exportTable() {
      this.$Message.success('导出表格, 请稍后')
      setTimeout(() => {
        this.currentTable.exportCsv({
          fileName: '职工健康管理详情表',
          original: false
        })
      }, 500)
    },
    // ? modal相关的方法
    closeInfoModal() {
      this.$Message.info('您关闭了本次会话')
    }
  }
}
</script>

<style lang="less" scoped></style>
