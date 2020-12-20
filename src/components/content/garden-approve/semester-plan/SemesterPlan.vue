<template>
  <div class="semester-plan">
    <semester-menu
      :commentStatus="commentStatus"
      :classTitle="classTitle"
      :classList="classList"
      :yearTitle="yearTitle"
      :yearList="yearList"
      :semesterTitle="semesterTitle"
      :semesterList="semesterList"
      @handleCommentButtons="handleCommentButtons"
      @selectClass="selectClass"
      @selectYear="selectYear"
      @selectSemester="selectSemester"
    />
    <div class="table-content">
      <approve-table
        :titleList="titleList"
        :dataList="dataList"
        :operations="operations"
        @handleSelect="handleSelect"
      />
    </div>
    <!-- 待点评Modal -->
    <Modal
      v-model="isShowToComment"
      :title="modalTitle"
      width="1000"
      ok-text="确认"
      cancel-text="取消"
      @on-ok="submitComment"
      @on-cancel="cancelComment"
    >
      <to-comment
        :bigTitle="bigTitle"
        :smallTitle="smallTitle"
        :commentContent="commentContent"
      />
    </Modal>
    <!-- 已点评Modal -->
    <Modal v-model="isShowIsCommented" :title="modalTitle" width="1000">
      <is-commented
        :bigTitle="bigTitle"
        :smallTitle="smallTitle"
        :commentContent="commentContent"
        :commenter="commenter"
        :commentTime="commentTime"
      />
    </Modal>
  </div>
</template>

<script>
// ? import components
const SemesterMenu = () => import('./child-components/SemesterMenu')
const ApproveTable = () => import('../ApproveTable')
const ToComment = () => import('../common-modal/ToComment')
const IsCommented = () => import('../common-modal/IsCommented')

// ? mock-data
const mockClassList = require('@mock/garden-approve/mockClassList')
const mockYearList = require('@mock/garden-approve/mockYearList')
const mockSemesterList = require('@mock/garden-approve/mockSemesterList')
const mockSPList = require('@mock/garden-approve/mockSPList')

export default {
  name: 'SemesterPlan',
  components: {
    SemesterMenu,
    ApproveTable,

    ToComment,
    IsCommented
  },
  data: () => ({
    // ? menu-data
    classTitle: '',
    classList: [],
    yearTitle: '',
    yearList: [],
    semesterTitle: '',
    semesterList: [],
    currentStatusIndex: 0,
    commentStatus: [
      {
        tag: '待点评',
        type: 'error'
      },
      {
        tag: '已点评',
        type: 'default'
      }
    ],
    operations: [
      {
        tag: '点评',
        type: 'primary'
      }
    ],
    // ? table-data
    titleList: '',
    dataList: [],
    // ? modal-data
    isShowToComment: false,
    isShowIsCommented: false,
    modalTitle: '',
    planTitleList: [],
    planDataList: [],
    bigTitle: '',
    smallTitle: '',
    commentContent: '',
    commenter: '',
    commentTime: ''
  }),
  methods: {
    // ? menu-functions
    handleCommentButtons(currentIndex) {
      this.currentStatusIndex = currentIndex
      if (this.currentStatusIndex === 0) {
        // ? 待审批状态
        this.operations = [
          {
            tag: '点评',
            type: 'primary'
          }
        ]
      } else {
        // ? 已审批状态
        this.operations = [
          {
            tag: '详情',
            type: 'primary'
          }
        ]
      }
    },
    selectClass(item) {
      this.classTitle = item
    },
    selectYear(item) {
      this.yearTitle = item
    },
    selectSemester(item) {
      this.semesterTitle = item
    },
    // ? table-functions
    handleSelect(currentIndex, currentTag) {
      switch (currentTag) {
        case '点评':
          this.modalTitle = '点评'
          this.handleSameOperations(currentIndex)
          this.isShowToComment = true
          break
        case '详情':
          this.modalTitle = '详情'
          this.commenter = 'undefined-后端获取的点评者'
          this.commentTime = 'undefined-后端获取的时间'
          this.handleSameOperations(currentIndex)
          this.isShowIsCommented = true
          break
      }
    },
    handleSameOperations(currentIndex) {
      this.bigTitle = this.dataList[currentIndex].planSemester
      this.smallTitle = this.dataList[currentIndex].fundTime
      this.commentContent = 'undefined-后端获取的内容'
    },
    // ? handle-modal functions
    submitComment() {
      setTimeout(() => {
        this.$Message.success('评论成功')
      }, 500)
    },
    cancelComment() {
      this.$Message.warning('您取消了本次操作')
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
      }, 320)
    },
    getYearList() {
      setTimeout(() => {
        const result = mockYearList
        const { msg } = result
        if (msg === 'Success') {
          this.yearTitle = result.data[0].info
          this.yearList = result.data
        }
      }, 250)
    },
    getSemesterList() {
      setTimeout(() => {
        const result = mockSemesterList
        const { msg } = result
        if (msg === 'Success') {
          this.semesterTitle = result.data[0].info
          this.semesterList = result.data
        }
      }, 300)
    },
    // ? 获取表格的数据信息
    getTableData() {
      // ? 先设置标题 (sync step)
      this.titleList = [
        {
          title: '序号',
          key: 'number',
          align: 'center',
          width: 100
        },
        {
          title: '计划学期',
          key: 'planSemester',
          align: 'center',
          width: 320
        },
        {
          title: '提交人',
          key: 'submmiter',
          align: 'center'
        },
        {
          title: '班级',
          key: 'class',
          align: 'center'
        },
        {
          title: '创建时间',
          key: 'fundTime',
          align: 'center'
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center'
        }
      ]
      // ? 再获取数据 (async step)
      setTimeout(() => {
        const result = mockSPList
        const { msg } = result
        if (msg === 'Success') {
          const dataList = result.data
          dataList.map(item => {
            this.dataList.push({
              number: item.number,
              planSemester: item.planSemester,
              submmiter: item.submmiter,
              class: item.class,
              fundTime: item.fundTime
            })
          })
        }
      }, 500)
    }
  },
  created() {
    this.getClassList()
    this.getYearList()
    this.getSemesterList()
    this.getTableData()
  }
}
</script>

<style lang="less" scoped></style>
