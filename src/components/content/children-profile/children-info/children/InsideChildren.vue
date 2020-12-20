<template>
  <div class="inside-children">
    <inside-menu
      :classTitle="classTitle"
      :classList="classList"
      @selectClass="selectClass"
      @getInputCardNumber="getInputCardNumber"
      @handleCommon="handleCommon"
      @handleSpecial="handleSpecial"
      @clickItem="clickItem"
    />
    <profile-table
      :titleList="titleList"
      :dataList="dataList"
      :tableIsLoading="tableIsLoading"
      @getSelectItem="getSelectItem"
      @getTable="getTable"
      @handleTableItem="handleTableItem"
    />
    <!-- modal-content -->
    <Modal
      v-model="isShowAddModal"
      :title="modalTitle"
      class="add-modal"
      width="1000"
      ok-text="保存"
      cancel-text="取消"
      @on-cancel="cancelModal"
    >
      <add-content
        :inputName="inputName"
        :selectGender="selectGender"
        :nationArr="nationArr"
        :birthDate="birthDate"
        :entryTime="entryTime"
        :classTitle="classTitle"
        :classList="classList"
        :parentList="parentList"
        @selectClass="selectClass"
      />
    </Modal>
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
    <Modal
      v-model="isShowEditModal"
      :title="modalTitle"
      class="edit-modal"
      width="1000"
      ok-text="保存"
      cancel-text="取消"
      @on-cancel="cancelModal"
    >
      <edit-content
        :inputName="inputName"
        :currentGender="gender"
        :currentNation="nation"
        :birthDate="birthDate"
        :entryTime="entryTime"
        :classTitle="classTitle"
        :classList="classList"
        :parentList="parentList"
      />
    </Modal>
    <!--  -->
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? child-components
// ?? menu
const InsideMenu = () => import('./inside-components/InsideMenu')
// ?? table
const ProfileTable = () => import('@ChildrenProfile/ProfileTable')
// ?? modal
const AddContent = () => import('../modal/AddContent')
const InfoContent = () => import('../modal/InfoContent')
const EditContent = () => import('../modal/EditContent')
// ?? divide-page
const DividePage = () => import('@common/divide-page/DividePage')
// ? mixins
import classInfoMixins from '@mixins/Common/classMixins'
import tableMixin from '@mixins/children-profile/insideChildrenMixin'

export default {
  name: 'InsideChildren',
  components: {
    InsideMenu,
    ProfileTable,

    AddContent,
    InfoContent,
    EditContent,

    DividePage
  },
  mixins: [classInfoMixins, tableMixin],
  data: () => ({
    // ? menu-data
    inputCardNumber: '',
    // ? table-data
    selectItem: [],
    selectIndexArr: [],
    currentTable: {},
    tableIsLoading: false,
    // ? modal-data
    modalTitle: '',
    // ? 1. add
    isShowAddModal: false,
    // ?? students
    inputName: '',
    selectGender: ['男', '女'],
    nationArr: [],
    // ?? date
    birthDate: '',
    entryTime: '',
    // ?? parentInfo(家长信息, 考虑到有多个家长, 这里应该是数组类型的)
    parentList: [],
    // ? 2. info
    isShowInfoModal: false,
    gender: '',
    nation: '',
    // ? 3. edit
    isShowEditModal: false,
    // ? page-data
    totalPage: 0
  }),
  computed: {
    studentName() {
      return this.$store.state.searchStudentName
    }
  },
  methods: {
    // ? menu-functions
    getInputCardNumber(inputValue) {
      this.inputCardNumber = inputValue
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
    handleSpecial(index) {
      switch (index) {
        case 0:
          // ? 添加幼儿
          this.parentList = [
            {
              pTitle: '',
              pList: [
                {
                  info: 'choose parent',
                  key: 0
                },
                {
                  info: '父亲',
                  key: 1
                },
                {
                  info: '母亲',
                  key: 2
                }
              ],
              pName: '',
              pPhone: '',
              pCard: '',
              pGender: ['男', '女']
            }
          ]
          this.nationArr = []
          this.modalTitle = '添加单个幼儿'
          this.isShowAddModal = true
          break
        case 2:
          this.$Modal.confirm({
            title: '导出所有',
            content: '这也许要花费您一点时间, 是否导出?',
            onOk: () => {
              this.currentTable.exportCsv({
                filename: '导出所有数据',
                original: false
              })
              setTimeout(() => {
                this.$Message.success('导出成功')
              }, 1000)
            },
            onCancel() {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
      }
    },
    clickItem(key) {
      switch (key) {
        case 0:
          this.$Message.info('下载简易模板中......')
          setTimeout(() => {
            this.$Message.success('下载成功')
          }, 1200)
          break
        case 1:
          this.$Message.info('请从本地中导入模板')
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
          // ? 查看详情信息
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
          // ? 编辑信息
          this.tableHandleCommon(itemIndex)
          this.parentList = [
            {
              pTitle: '后台传的家长',
              pList: [
                {
                  info: 'choose parent',
                  key: 0
                },
                {
                  info: '父亲',
                  key: 1
                },
                {
                  info: '母亲',
                  key: 2
                }
              ],
              pName: '请求后台传家长姓名',
              pPhone: '请求后台传家长电话',
              pCard: '请求后台传家长卡号',
              pGender: '请求后台传家长性别'
            }
          ]
          this.modalTitle = '编辑'
          this.isShowEditModal = true
          break
        // ? 设置离园
        case 2:
          this.$Modal.confirm({
            title: `设置第${itemIndex + 1}位同学离园`,
            content: '确认操作?',
            onOk: () => {
              this.dataList.splice(itemIndex, 1)
              this.$Message.success(`设置第${itemIndex + 1}位同学留园成功`)
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
        case 3:
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
      this.$Message.warning('您取消了本次会话')
    }
    // ? async functions
  },
  created() {}
}
</script>

<style lang="less" scoped></style>
