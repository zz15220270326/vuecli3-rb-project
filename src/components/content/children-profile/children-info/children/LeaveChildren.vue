<template>
  <div class="leave-children">
    <!-- leave-menu -->
    <leave-menu
      @getInputCardNumber="getInputCardNumber"
      @handleCommon="handleCommon"
    />
    <!-- leave-table -->
    <profile-table
      :titleList="titleList"
      :dataList="dataList"
      :tableIsLoading="tableIsLoading"
      @getSelectItem="getSelectItem"
      @getTable="getTable"
      @handleTableItem="handleTableItem"
    />
    <!-- info-Modal -->
    <Modal
      v-model="isShowInfoModal"
      :title="modalTitle"
      class="info-modal"
      width="1000"
      ok-text="保存"
      cancel-text="取消"
      @on-cancel="cancelModal"
    >
      <info-content
        :inputName="inputName"
        :gender="gender"
        :nation="nation"
        :birthDate="birthDate"
        :entryTime="entryTime"
        :classTitle="classTitle"
        :parentList="parentList"
      />
    </Modal>
  </div>
</template>

<script>
// ? import-components
const LeaveMenu = () => import('./leave-components/LeaveMenu')
const ProfileTable = () => import('@ChildrenProfile/ProfileTable')
const InfoContent = () => import('../modal/InfoContent')

// ? mixins
import tableMixin from '@mixins/children-profile/leaveChildrenMixin'

export default {
  name: 'Leavechildren',
  components: {
    LeaveMenu,
    ProfileTable,
    InfoContent
  },
  data: () => ({
    // ? menu-data
    inputCard: '',
    // ? table-data
    tableIsLoading: false,
    selectItem: [],
    currentTable: [],
    // ? modal-data
    modalTitle: '',
    isShowInfoModal: false,
    inputName: '',
    gender: '',
    nation: '',
    birthDate: '',
    entryTime: '',
    classTitle: '',
    parentList: []
  }),
  mixins: [tableMixin],
  methods: {
    // ? menu-functions
    getInputCardNumber(inputValue) {
      this.inputCard = inputValue
    },
    handleCommon(index) {
      switch (index) {
        case 0:
          this.tableIsLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.tableIsLoading = false
          }, 1000)
          break
        case 1:
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择要删除的计划项')
          } else {
            this.$Modal.confirm({
              title: '删除表格中选中的信息',
              content: '您是否要删除这些已经选中的信息? 删除后数据无法恢复!',
              onOk: () => {
                this.tableIsLoading = true
                setTimeout(() => {
                  let newDataList = this.dataList.filter(item1 =>
                    this.selectItem.every(
                      item2 => item1.number !== item2.number
                    )
                  )
                  this.dataList = newDataList
                  this.$Message.error('删除成功')
                  this.tableIsLoading = false
                }, 500)
              },
              onCancel: () => {
                this.$Message.warning('您取消了本次操作')
              }
            })
          }
          break
        case 2:
          // ? 导出选中的表格项
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择要导出的数据')
          } else {
            this.currentTable.exportCsv({
              filename: '导出数据',
              // data: this.selectIndexArr.map(index => this.currentTable[index]),
              data: this.selectItem,
              original: false
            })
          }
          break
      }
    },
    // ? table-functions
    getSelectItem(selectItem) {
      this.selectItem = selectItem
      let indexArr = this.selectItem.map(item => item.number)
      this.selectIndexArr = indexArr
    },
    getTable(table) {
      this.currentTable = table
    },
    handleTableItem(itemIndex, btnIndex) {
      switch (btnIndex) {
        case 0:
          this.tableHandleCommon(itemIndex)
          this.parentList = [
            {
              pTitle: '后台传的家长',
              pName: '请求后台传家长姓名',
              pPhone: '请求后台传家长电话',
              pCard: '请求后台传家长卡号',
              pGender: '请求后台传家长性别'
            }
          ]
          this.modalTitle = '详情'
          this.isShowInfoModal = true
          break
        case 1:
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}项`,
            content: '是否删除?删除后数据无法恢复',
            onOk: () => {
              this.dataList.splice(itemIndex, 1)
              this.$Message.error(`删除第${itemIndex + 1}项成功`)
            },
            onCancel: () => {
              this.$Message.success('您取消了删除')
            }
          })
          break
      }
    },
    tableHandleCommon(itemIndex) {
      this.inputName = this.dataList[itemIndex].name
      this.gender = this.dataList[itemIndex].gender
      this.nation = '后台传递的民族信息'
      this.birthDate = '只有年龄, 后台传递的出生日期'
      this.entryTime = this.dataList[itemIndex].date
      this.classTitle = this.dataList[itemIndex].class
    },
    // ? modal-functions
    cancelModal() {
      this.$Message.success('您关闭了本次变化')
    }
  }
}
</script>

<style lang="less" scoped></style>
