<template>
  <div class="children-ask-leave">
    <leave-query-menu
      :approveStatus="approveStatus"
      :classTitle="classTitle"
      :classList="classList"
      @selectClass="selectClass"
      @checkApproveStatus="checkApproveStatus"
    />
    <div class="table-content">
      <leave-table
        :titleList="titleList"
        :dataList="dataList"
        :operations="operations"
        @handleSelectApprove="handleSelectApprove"
      />
    </div>
    <div class="modal-content">
      <!-- 待审批弹窗 -->
      <Modal
        v-model="isShowToApprove"
        class="to-approve-modal"
        :title="modalTitle"
        width="800"
        ok-text="提交"
        cancel-text="取消"
        :transfer="false"
      >
        <to-approve
          :studentName="studentName"
          :currentClass="currentClass"
          :holidayType="holidayType"
          :startTime="startTime"
          :endTime="endTime"
          :askContent="askContent"
          :fundTime="fundTime"
        />
      </Modal>
      <!-- 已审批弹窗 -->
      <Modal
        v-model="isShowIsApproved"
        class="is-approve-modal"
        :title="modalTitle"
        width="800"
        :footer-hide="true"
        :transfer="false"
      >
        <is-approved
          :studentName="studentName"
          :currentClass="currentClass"
          :holidayType="holidayType"
          :startTime="startTime"
          :endTime="endTime"
          :askContent="askContent"
          :fundTime="fundTime"
          :checkedTeacher="checkedTeacher"
          :checkedTime="checkedTime"
          :note="note"
        />
      </Modal>
    </div>
    <div class="divide-page">
      <Page :total="dataList.length" show-sizer show-elevator show-total />
    </div>
  </div>
</template>

<script>
// ? child-components
const LeaveQueryMenu = () => import('./child-components/LeaveQueryMenu')
const LeaveTable = () => import('./child-components/LeaveTable')
// ?? modal-child
const ToApprove = () => import('./child-components/approve-modal/ToApprove')
const isApproved = () => import('./child-components/approve-modal/isApproved')

// ? mockData
const mockClassList = require('@mock/garden-approve/mockClassList.json')
const mockCHList = require('@mock/garden-approve/mockCHList.json')

export default {
  name: 'ChildrenAskLeave',
  components: {
    LeaveQueryMenu,
    LeaveTable,
    // ? modal
    ToApprove,
    isApproved
  },
  data: () => ({
    approveStatus: [
      {
        tag: '待审批',
        type: 'error'
      },
      {
        tag: '已审批',
        type: 'default'
      }
    ],
    classTitle: '',
    classList: [],
    // ? table-data
    titleList: [],
    dataList: [],
    operations: [
      {
        tag: '审批',
        type: 'primary'
      }
    ],
    totalPage: 6,
    isApprove: 0,
    // ? Modal-info
    isShowToApprove: false,
    isShowIsApproved: false,
    // ?? modal-content
    // ??? common-content
    modalTitle: '',
    studentName: '',
    currentClass: '',
    startTime: '',
    endTime: '',
    holidayType: '',
    askContent: '',
    fundTime: '',
    // ???? is-approved-modal-content
    checkedTeacher: '',
    checkedTime: '',
    note: ''
  }),
  methods: {
    // ? menu functions
    selectClass(selectItem) {
      this.classTitle = selectItem
    },
    checkApproveStatus(currentIndex) {
      this.isApprove = currentIndex
      if (this.isApprove === 0) {
        // ? 待审批状态
        this.operations = [
          {
            tag: '审批',
            type: 'primary'
          }
        ]
      } else {
        // ? 已审批状态
        this.operations = [
          {
            tag: '审批结果',
            type: 'primary'
          }
        ]
      }
    },
    // ? table-functions
    handleSelectApprove(currentIndex, currentTag) {
      switch (currentTag) {
        // ? 处理待审批弹窗
        case '审批':
          this.isShowToApprove = true
          this.holidayType = '病假'
          // ? common-functions
          this.commonApprove(currentIndex)
          break
        // ? 处理已审批弹窗
        case '审批结果':
          this.isShowIsApproved = true
          this.modalTitle = '请假审批(已审批)'
          this.checkedTeacher = '后端返回的审批老师'
          this.checkedTime = '后端返回的审批时间'
          this.note = '后端返回的备注信息'
          // ? functions
          this.commonApprove(currentIndex)
          break
      }
    },
    commonApprove(currentIndex) {
      this.modalTitle = '请假审批(待审批)'
      this.studentName = this.dataList[currentIndex].holidayChildren
      this.currentClass = this.dataList[currentIndex].currentClass
      this.startTime = this.dataList[currentIndex].holidaySpan.start_time
      this.endTime = this.dataList[currentIndex].holidaySpan.end_time
      this.askContent = 'undefined-后台传'
      this.fundTime = 'undefined-后台传'
    },
    /**
     * ? async functions
     */
    getClassList() {
      setTimeout(() => {
        const result = mockClassList
        const { msg } = result
        if (msg === 'Success') {
          this.classTitle = result.data[0].info
          this.classList = result.data
        }
      }, 300)
    },
    getTableList() {
      setTimeout(() => {
        const result = mockCHList
        const { msg } = result
        if (msg === 'Success') {
          const { data } = result
          data.map((item, index) => {
            if (index !== 3) {
              this.titleList.push({
                title: item.desc,
                key: item.key,
                align: 'center'
              })
            } else {
              this.titleList.push({
                title: item.desc,
                slot: item.key,
                align: 'center'
              })
            }
          })
          // ? 添加操作
          this.titleList.push({
            title: '操作',
            slot: 'operations',
            align: 'center'
          })
          // ? 设置表格的宽度
          this.titleList[0].width = 100
          this.titleList[1].width = 180
          this.titleList[2].width = 210
          this.titleList[3].width = 250
          this.titleList[4].width = 250
          this.titleList[5].width = 220
          let numberList = data[0].data
          let holidayChildrenList = data[1].data
          let classList = data[2].data
          let askTimeList = data[3].data
          let contentList = data[4].data
          let submitList = data[5].data
          data.map((item, index) => {
            this.dataList.push({
              number: numberList[index],
              holidayChildren: holidayChildrenList[index],
              currentClass: classList[index],
              holidaySpan: askTimeList[index],
              content: contentList[index],
              submitTime: submitList[index]
            })
          })
        }
      }, 500)
    }
  },
  created() {
    // ? 发送网络请求
    this.getClassList()
    this.getTableList()
  }
}
</script>

<style lang="less" scoped>
.children-ask-leave {
  .table-content {
    width: 100%;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .divide-page {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
