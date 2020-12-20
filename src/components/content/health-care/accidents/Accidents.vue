<template>
  <div class="accidents">
    <accidents-menu
      :classTitle="classTitle"
      :classList="classList"
      :operations="operations"
      @selectClass="selectClass"
      @handleOperations="handleOperations"
      @handleAdd="handleAdd"
    />
    <h-c-table
      border
      :titleList="titleList"
      :dataList="dataList"
      :tableIsLoading="tableIsLoading"
      @getSelectItem="getSelectItem"
      @handleTableItem="handleTableItem"
    />
    <!-- modal-content -->
    <!-- 添加弹窗 -->
    <Modal
      v-model="isShowAddModal"
      :title="modalTitle"
      width="800"
      ok-text="确认"
      cancel-text="取消"
    >
      <add-situation
        :classList="classList"
        :studentList="studentList"
        :teacherList="teacherList"
      />
    </Modal>
    <!-- 详情弹窗 -->
    <Modal
      v-model="isShowInfoModal"
      :title="modalTitle"
      width="800"
      ok-text="确认"
      cancel-text="取消"
      @on-cancel="cancelModal"
    >
      <info
        :currentClass="currentClass"
        :name="name"
        :accidentName="accidentName"
        :enviroment="enviroment"
        :situation="situation"
        :teacher="teacher"
        :imgs="imgs"
      />
    </Modal>
    <!-- 编辑弹窗 -->
    <Modal
      v-model="isShowEditModal"
      :title="modalTitle"
      width="800"
      ok-text="确认"
      cancel-text="取消"
      @on-cancel="cancelModal"
    >
      <add-situation
        :classList="classList"
        :studentList="studentList"
        :teacherList="teacherList"
        :propAccidentName="accidentName"
        :propEnviroment="enviroment"
        :propSituation="situation"
        :propImgsList="imgs"
      />
    </Modal>
    <!--  -->
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? child-components
const AccidentsMenu = () => import('./child-components/AccidentsMenu')
const HCTable = () => import('../HCTable')

// ? modal
const AddSituation = () => import('./child-components/modal/AddSituation')
const Info = () => import('./child-components/modal/Info')

const DividePage = () => import('@common/divide-page/DividePage')

// ? mock-data
const mockChildrenList = require('@mock/health-care/mockChildrenList')
const mockTeacherList = require('@mock/health-care/mockTeacherList')

// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import accidentTableMixin from '@mixins/health-care/accidentTableMixin'
import handleOperationMixin from '@mixins/health-care/handleOperationMixin'

export default {
  name: 'Accidents',
  components: {
    AccidentsMenu,
    HCTable,
    AddSituation,
    Info,
    DividePage
  },
  mixins: [classMixins, accidentTableMixin, handleOperationMixin],
  data: () => ({
    // ? menu-data
    operations: [
      {
        tag: '查询',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'error'
      }
    ],
    // ? modal-data
    modalTitle: '',
    // ?? add modal-data
    isShowAddModal: false,
    studentList: [],
    teacherList: [],
    // ?? info-modal-data
    isShowInfoModal: false,
    currentClass: '',
    name: '',
    accidentName: '',
    enviroment: '',
    situation: '',
    teacher: '',
    imgs: [],
    // ?? edit-modal-data
    isShowEditModal: false,
    // ? page-data
    totalPage: 7
  }),
  methods: {
    handleAdd() {
      this.$Message.info('打开添加弹窗')
      this.modalTitle = '添加'
      this.isShowAddModal = true
    },
    // ? table-functions
    handleTableItem(itemIndex, buttonIndex) {
      switch (buttonIndex) {
        case 0:
          // ? 详情
          this.$Message.info(`查看第${buttonIndex + 1}条信息详情`)
          this.commonHandle(itemIndex)
          this.modalTitle = '详情'
          this.isShowInfoModal = true
          break
        case 1:
          // ? 编辑
          this.$Message.success(buttonIndex)
          this.commonHandle(itemIndex)
          this.modalTitle = '编辑'
          this.isShowEditModal = true
          break
        case 2:
          // ? 删除
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}条数据`,
            content: '是否删除? 删除后数据无法恢复',
            onOk: () => {
              this.dataList.splice(itemIndex, 1)
            },
            onCancel: () => {
              this.$Message.info('您取消了本次删除操作')
            }
          })
          break
      }
    },
    commonHandle(itemIndex) {
      this.currentClass = this.dataList[itemIndex].class
      this.name = this.dataList[itemIndex].name
      this.accidentName = this.dataList[itemIndex].accidentName
      this.enviroment = this.dataList[itemIndex].enviroment
      this.situation = this.dataList[itemIndex].situation
      this.teacher = this.dataList[itemIndex].teacher
      this.imgs = this.dataList[itemIndex].imgs
    },
    // ? modal-functions
    cancelModal() {
      this.$Message.info('您关闭了本次对话')
    },
    // ? async functions
    getSelectItem(selectItem) {
      this.selectItem = selectItem
    },
    getStudentData() {
      setTimeout(() => {
        const result = mockChildrenList
        if (result.msg && result.data) {
          if (result.msg === 'Success') {
            const studentList = result.data
            this.studentList = studentList
          }
        }
      }, 300)
    },
    getTeacherData() {
      setTimeout(() => {
        const result = mockTeacherList
        if (result.msg && result.data) {
          if (result.msg === 'Success') {
            const teacherList = result.data
            this.teacherList = teacherList
          }
        }
      }, 300)
    }
  },
  /**
   * ! life-hooks
   */
  created() {
    this.getClassList()
    this.getStudentData()
    this.getTeacherData()
  }
}
</script>

<style lang="less" scoped></style>
