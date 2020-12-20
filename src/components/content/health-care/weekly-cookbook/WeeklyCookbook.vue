<template>
  <div class="weekly-cookbook">
    <weekly-menu
      :yearTitle="yearTitle"
      :yearList="yearList"
      :semesterTitle="semesterTitle"
      :semesterList="semesterList"
      :weekTitle="weekTitle"
      :weekList="weekList"
      :operations="operations"
      @selectYear="selectYear"
      @selectSemester="selectSemester"
      @selectWeek="selectWeek"
      @handleOperations="handleOperations"
      @createMenu="createMenu"
    />
    <div class="modal-content">
      <!-- 新建食谱 -->
      <Modal
        v-model="isShowAddModal"
        :title="modalTitle"
        width="850"
        ok-text="发布"
        cancel-text="取消"
        @on-ok="confirmAddModal"
        @on-cancel="cancelModal"
      >
        <add-cookbook />
      </Modal>
      <!-- 查看食谱 -->
      <Modal
        v-model="isShowInfoModal"
        :title="modalTitle"
        width="850"
        :footer-hide="true"
        @on-cancel="cancelModal"
      >
        <cookbook-info :infoTitle="infoTitle" />
      </Modal>
      <!-- 编辑食谱 -->
      <Modal
        v-model="isShowEditModal"
        :title="modalTitle"
        width="850"
        ok-text="发布"
        cancel-text="取消"
        @on-ok="confirmEditModal"
        @on-cancel="cancelModal"
      >
        <add-cookbook />
      </Modal>
      <!-- 删除食谱 (不用写) -->
      <!-- 复制食谱 -->
      <Modal
        v-model="isShowCopyModal"
        :title="modalTitle"
        width="850"
        ok-text="发布"
        cancel-text="取消"
        @on-cancel="cancelModal"
      >
        <add-cookbook />
      </Modal>
    </div>
    <h-c-table
      :titleList="titleList"
      :dataList="dataList"
      :tableIsLoading="tableIsLoading"
      @getSelectItem="getSelectItem"
      @handleTableItem="handleTableItem"
    />
    <div class="divide-page">
      <Page :total="totalPage" show-sizer show-elevator show-total />
    </div>
  </div>
</template>

<script>
// ? import components
const WeeklyMenu = () => import('./child-components/WeeklyMenu')
const HCTable = () => import('../HCTable')
// todo Modal-components
const AddCookbook = () => import('./child-components/AddCookbook')
const CookbookInfo = () => import('./child-components/CookbookInfo')
// ? mock-data
const mockYearList = require('@mock/health-care/mockYearList')
const mockSemesterList = require('@mock/health-care/mockSemesterList')
const mockWeekList = require('@mock/health-care/mockWeekList')
const mockWCookData = require('@mock/health-care/mockWCookData')

export default {
  name: 'WeeklyCookbook',
  components: {
    WeeklyMenu,
    HCTable,
    AddCookbook,
    CookbookInfo
  },
  data: () => ({
    // ? menu-data
    // ?? selected
    yearTitle: '',
    yearList: [],
    semesterTitle: '',
    semesterList: [],
    weekTitle: '',
    weekList: [],
    // todo (选择要删除的按钮)
    selectItem: [],
    // ?? operations
    operations: [],

    // ? table-data
    titleList: [],
    dataList: [],
    tableOperations: [
      {
        tag: '详情',
        type: 'info'
      },
      {
        tag: '编辑',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'error'
      },
      {
        tag: '复制食谱',
        type: 'success'
      }
    ],
    tableIsLoading: false,
    // ? divide-page
    totalPage: 12,
    // ? modal-content
    modalTitle: '',
    isShowAddModal: false,
    isShowInfoModal: false,
    infoTitle: '',
    isShowEditModal: false,
    isShowDeleteModal: false,
    isShowCopyModal: false
  }),
  methods: {
    // ? menu-functions
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
    selectYear(selectItem) {
      this.yearTitle = selectItem
    },
    selectSemester(selectItem) {
      this.semesterTitle = selectItem
    },
    selectWeek(selectItem) {
      this.weekTitle = selectItem
    },
    handleOperations(selectKey) {
      switch (selectKey) {
        case 0:
          this.tableIsLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.tableIsLoading = false
          }, 600)
          break
        case 1:
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
    createMenu() {
      this.modalTitle = '创建食谱'
      this.isShowAddModal = true
    },
    // ? table-functions
    getSelectItem(selectItem) {
      this.selectItem = selectItem
    },
    handleTableItem(itemIndex, buttonIndex) {
      switch (buttonIndex) {
        case 0:
          // todo 查看详情信息
          this.$Message.info('查看详情信息...')
          this.infoTitle = this.dataList[itemIndex].weekTime
          this.modalTitle = '详情'
          this.isShowInfoModal = true
          break
        case 1:
          // todo 编辑信息
          this.$Message.success(`编辑第${itemIndex + 1}条内容`)
          this.modalTitle = `编辑第${itemIndex + 1}条内容`
          this.isShowEditModal = true
          break
        case 2:
          // todo 删除内容
          this.$Message.error(`删除第${itemIndex + 1}条内容`)
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}条内容`,
            content: '确认删除? 删除后数据无法恢复',
            onOk: () => {
              // ? 真实开发中是发请求删除
              this.dataList.splice(itemIndex, 1)
            },
            onCancel: () => {
              this.$Message.success('您取消了本次删除操作')
            }
          })
          break
        case 3:
          // todo 复制食谱
          this.$Message.success(`复制第${itemIndex + 1}条内容`)
          this.modalTitle = `复制第${itemIndex + 1}条内容`
          this.isShowCopyModal = true
          break
      }
    },
    // ? modal-functions
    confirmAddModal() {
      this.$Message.info('请稍等...')
      setTimeout(() => {
        this.$Message.success('操作成功')
      }, 1000)
    },
    cancelModal() {
      this.$Message.warning('您取消了本次操作')
    },
    cancelInfoModal() {
      this.$Message.info('查询完毕后, 您关闭了弹窗')
    },
    confirmEditModal() {
      this.$Message.info('编辑成功')
    },
    /**
     * ? async functions
     */
    // todo menu-data
    getYear() {
      setTimeout(() => {
        const result = mockYearList
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const dataList = result.data
              if (dataList[0].info) {
                this.yearTitle = dataList[0].info
                this.yearList = dataList
              }
            }
          }
        }
      }, 300)
    },
    getSemester() {
      setTimeout(() => {
        const result = mockSemesterList
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const dataList = result.data
              if (dataList[0].info) {
                this.semesterTitle = dataList[0].info
                this.semesterList = dataList
              }
            }
          }
        }
      }, 300)
    },
    getWeek() {
      setTimeout(() => {
        const result = mockWeekList
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const dataList = result.data
              if (dataList[0].info) {
                this.weekTitle = dataList[0].info
                this.weekList = dataList
              }
            }
          }
        }
      }, 300)
    },
    // todo get-table
    getTable() {
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
          title: '周次',
          key: 'weekTime',
          width: 350,
          align: 'center'
        },
        {
          title: '发布人',
          key: 'submitter',
          width: 150,
          align: 'center'
        },
        {
          title: '创建时间',
          key: 'fundTime',
          width: 250,
          align: 'center'
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = mockWCookData
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const { data } = result
              this.dataList = data
              this.dataList.map(
                item => (item.operations = this.tableOperations)
              )
            }
          }
        }
      }, 350)
    }
  },
  created() {
    // ? 同步方法
    this.initOperations()
    // ? 异步方法
    this.getYear()
    this.getSemester()
    this.getWeek()
    this.getTable()
  }
}
</script>

<style lang="less" scoped>
.weekly-cookbook {
  .divide-page {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
