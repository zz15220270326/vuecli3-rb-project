<template>
  <div class="children-daily-care">
    <children-menu
      @menuOperations="menuOperations"
      @createTable="createTable"
    />
    <div class="content">
      <h-b-table
        :titleList="titleList"
        :dataList="dataList"
        :tableIsLoading="tableIsLoading"
        @getSelectItem="getSelectItem"
        @handleTableItem="handleTableItem"
      />
    </div>
    <!-- 弹窗部分: 添加Modal和详情Modal -->
    <Modal
      class-name="add-modal"
      v-model="isShowAddModal"
      :title="modalTitle"
      width="1200"
      @on-cancel="cancelModal"
    >
      <daily-add-content />
    </Modal>
    <Modal
      v-model="isShowInfoModal"
      :title="modalTitle"
      width="800"
      class-name="info-modal"
      :footer-hide="true"
      @on-cancel="cancelModal"
    >
      <daily-info-content
        :date="date"
        :checkType="checkType"
        :currentClass="currentClass"
        :name="name"
        :temperatue="temperatue"
        :healthStatus="healthStatus"
        :symbol="symbol"
        :handleType="handleType"
        :desc="desc"
        :symbolImgList="symbolImgList"
        :registrant="registrant"
        :registerTime="registerTime"
      />
    </Modal>
    <!--  -->
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? import components
const ChildrenMenu = () => import('./child-components/ChildrenMenu')
const HBTable = () => import('@HealthBorder/HBTable')
const DailyAddContent = () => import('./child-components/DailyAddContent')
const DailyInfoContent = () => import('./child-components/DailyInfoContent')
const DividePage = () => import('@common/divide-page/DividePage')
// ? import mixins
import healthStatusMixin from '@mixins/health-border/healthStatusMixin'
import stuStatusTableMixin from '@mixins/health-border/stuStatusTableMixin'
export default {
  name: 'ChildrenDailyCare',
  components: {
    ChildrenMenu,
    HBTable,
    DailyAddContent,
    DailyInfoContent,
    DividePage
  },
  mixins: [healthStatusMixin, stuStatusTableMixin],
  data: () => ({
    selectItem: [],
    // ? modal-data
    modalTitle: '',
    // ?? add-modal
    isShowAddModal: false,
    // ?? info-modal
    isShowInfoModal: false,
    date: '',
    registerTime: '',
    checkType: '',
    name: '',
    currentClass: '',
    temperatue: 0,
    healthStatus: '',
    symbol: '',
    handleType: '',
    desc: '',
    symbolImgList: [],
    registrant: ''
  }),
  methods: {
    // ? menu-functions
    menuOperations(currentIndex) {
      switch (currentIndex) {
        case 0:
          this.tableIsLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.tableIsLoading = false
          }, 1000)
          break
        case 1:
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择要删除的内容')
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
                this.$Message.warning('您取消了本次操作')
              }
            })
          }
          break
      }
    },
    createTable() {
      this.isShowAddModal = true
      this.modalTitle = '报表'
    },
    // ? table-functions
    getSelectItem(selectItem) {
      this.selectItem = selectItem
    },
    handleTableItem(itemIndex, btnIndex) {
      switch (btnIndex) {
        case 0:
          // ? 先传数据再设置modal显示
          this.date = this.dataList[itemIndex].date
          this.checkType = this.dataList[itemIndex].checkType
          this.currentClass = this.dataList[itemIndex].currentClass
          this.name = this.dataList[itemIndex].name
          this.temperatue = this.dataList[itemIndex].temperatue
          this.healthStatus = this.dataList[itemIndex].healthStatus
          this.symbol = this.dataList[itemIndex].symbol
          this.handleType = this.dataList[itemIndex].handleType
          this.registrant = this.dataList[itemIndex].registrant

          this.desc = '暂无备注'
          this.symbolImgList = []
          this.registerTime = this.dataList[itemIndex].date + ' 00:00:00(mock)'

          this.modalTitle = '详情'
          this.isShowInfoModal = true
          break
        case 1:
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}条数据`,
            content: '是否删除? 删除后数据无法恢复',
            onOk: () => {
              this.dataList.splice(itemIndex, 1)
              this.$Message.error('删除数据成功')
            },
            onCancel: () => {
              this.$Message.info('您取消了本次删除操作')
            }
          })
          break
      }
    },
    cancelModal() {
      this.$Message.success('您关闭了本次对话')
    }
  }
}
</script>

<style lang="less" scoped>
.children-daily-care {
  .content {
    margin-left: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
