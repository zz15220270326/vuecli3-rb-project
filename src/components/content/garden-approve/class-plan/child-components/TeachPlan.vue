<template>
  <div class="approve-teach-plan">
    <teach-querymenu
      :commentStatus="commentStatus"
      :classTitle="classTitle"
      :classList="classList"
      :yearTitle="yearTitle"
      :yearList="yearList"
      :semesterTitle="semesterTitle"
      :semesterList="semesterList"
      :weekTitle="weekTitle"
      :weekList="weekList"
      @checkApproveStatus="checkApproveStatus"
      @selectClass="selectClass"
      @selectYear="selectYear"
      @selectSemester="selectSemester"
      @selectWeek="selectWeek"
    />
    <div class="table-content">
      <approve-table
        :operations="operations"
        :titleList="titleList"
        :dataList="dataList"
        @handleSelect="handleSelect"
      />
    </div>
    <!-- 待点评Modal -->
    <Modal
      v-model="isShowToComment"
      :title="modalTitle"
      width="1200"
      ok-text="确认"
      cancel-text="取消"
      @on-ok="submitComment"
      @on-cancel="cancelComment"
    >
      <to-comment
        :bigTitle="bigTitle"
        :smallTitle="smallTitle"
        :planTitleList="planTitleList"
        :planDataList="planDataList"
      />
    </Modal>
    <!-- 已点评Modal -->
    <Modal v-model="isShowIsCommented" :title="modalTitle" width="1200">
      <is-commented
        :bigTitle="bigTitle"
        :smallTitle="smallTitle"
        :planTitleList="planTitleList"
        :planDataList="planDataList"
        :commentContent="commentContent"
        :commenter="commenter"
        :commentTime="commentTime"
      />
    </Modal>
  </div>
</template>

<script>
// ? import components
const TeachQuerymenu = () => import('./teach-children/TeachQuerymenu')
const ApproveTable = () => import('../../ApproveTable')
const ToComment = () => import('./teach-children/teach-modal/ToComment')
const IsCommented = () => import('./teach-children/teach-modal/IsCommented')

// ? mock-data
const mockClassList = require('@mock/garden-approve/mockClassList')
const mockYearList = require('@mock/garden-approve/mockYearList')
const mockSemesterList = require('@mock/garden-approve/mockSemesterList')
const mockWeekList = require('@mock/garden-approve/mockWeekList')
const mockTPList = require('@mock/garden-approve/mockTPList')
const mockWPList = require('@mock/garden-approve/mockWPList')

export default {
  name: 'TeachPlan',
  components: {
    TeachQuerymenu,
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
    weekTitle: '',
    weekList: [],
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
    titleList: [],
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
    checkApproveStatus(currentIndex) {
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
    selectClass(selectItem) {
      this.classTitle = selectItem
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
          this.commentContent = 'undefined-后端获取的内容'
          this.commenter = 'undefined-后端获取的点评者'
          this.commentTime = 'undefined-后端获取的时间'
          this.handleSameOperations(currentIndex)
          this.isShowIsCommented = true
          break
      }
    },
    handleSameOperations(currentIndex) {
      this.bigTitle = this.dataList[currentIndex].title
      this.smallTitle = this.dataList[currentIndex].fundTime
    },
    /**
     * ? async-functions
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
    getWeekList() {
      setTimeout(() => {
        const result = mockWeekList
        const { msg } = result
        if (msg === 'Success') {
          this.weekTitle = result.data[0].info
          this.weekList = result.data
        }
      }, 300)
    },
    // ?? get-table-data
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
          title: '标题',
          key: 'title',
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
        const result = mockTPList
        const { msg } = result
        if (msg === 'Success') {
          const dataList = result.data
          dataList.map(item => {
            this.dataList.push({
              number: item.number,
              title: item.title,
              submmiter: item.submmiter,
              class: item.class,
              fundTime: item.fundTime
            })
          })
        }
      }, 500)
    },
    // ? modal-table-data
    getModalTableData() {
      // ? 设置title中的数据
      this.planTitleList = [
        {
          title: '上午/下午',
          key: 'noon',
          align: 'center'
        },
        {
          title: '时间段',
          key: 'timeSpan',
          align: 'center'
        },
        {
          title: '周一',
          key: 'day1',
          align: 'center'
        },
        {
          title: '周二',
          key: 'day2',
          align: 'center'
        },
        {
          title: '周三',
          key: 'day3',
          align: 'center'
        },
        {
          title: '周四',
          key: 'day4',
          align: 'center'
        },
        {
          title: '周五',
          key: 'day5',
          align: 'center'
        }
      ]
      // ? 异步获取modal中的data
      setTimeout(() => {
        const result = mockWPList
        const { msg } = result
        if (msg === 'Success') {
          if (result.data) {
            const dataList = result.data
            dataList.map(item => {
              this.planDataList.push({
                noon: item.noon,
                timeSpan: item.timeSpan,
                day1: item.day1,
                day2: item.day2,
                day3: item.day3,
                day4: item.day4,
                day5: item.day5
              })
            })
          }
        }
      }, 400)
    },
    // ? modal-functions
    submitComment() {
      setTimeout(() => {
        this.$Message.success('评论成功')
      }, 500)
    },
    cancelComment() {
      this.$Message.warning('您取消了本次操作')
    }
  },

  created() {
    // ? async
    // todo menu-data
    this.getClassList()
    this.getYearList()
    this.getSemesterList()
    this.getWeekList()
    // todo table-data
    this.getTableData()
    // todo modal-data
    this.getModalTableData()
  }
}
</script>

<style lang="less" scoped>
.approve-teach-plan {
  .table-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
  }
}
</style>
