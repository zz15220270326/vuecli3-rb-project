<template>
  <div class="approve-other-plan">
    <other-querymenu
      :commentStatus="commentStatus"
      :classTitle="classTitle"
      :classList="classList"
      @checkApproveStatus="checkApproveStatus"
      @selectClass="selectClass"
      @searchComment="searchComment"
    />
    <div class="table-content">
      <approve-table
        :titleList="titleList"
        :dataList="dataList"
        :operations="operations"
        @handleSelect="handleSelect"
      />
    </div>
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
    <Modal
      v-model="isShowIsCommented"
      :title="modalTitle"
      width="1200"
      @on-ok="submitComment"
      @on-cancel="cancelComment"
    >
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
const OtherQuerymenu = () => import('./other-children/OtherQuerymenu')
const ApproveTable = () => import('../../ApproveTable')
const ToComment = () => import('./other-children/other-modal/ToComment')
const IsCommented = () => import('./other-children/other-modal/IsCommented')

// ? mock-data
const mockClassList = require('@mock/garden-approve/mockClassList')
const mockOtherList = require('@mock/garden-approve/mockOtherList')
const mockWPList = require('@mock/garden-approve/mockWPList')

export default {
  name: 'OtherPlan',
  components: {
    OtherQuerymenu,
    ApproveTable,
    ToComment,
    IsCommented
  },
  data: () => ({
    // ? menu-data
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
    classTitle: '',
    classList: [],
    currentStatusIndex: 0,
    // ? table-data
    titleList: [],
    dataList: [],
    // ? modal-title
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
    // ? modal-functions
    submitComment() {
      setTimeout(() => {
        this.$Message.success('评论成功')
      }, 500)
    },
    cancelComment() {
      this.$Message.warning('您取消了本次操作')
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
        const result = mockOtherList
        const { msg } = result
        if (msg === 'Success') {
          const dataList = result.data
          dataList.map(item => {
            this.dataList.push({
              number: item.number,
              title: item.title,
              class: item.class,
              submmiter: item.submmiter,
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
    searchComment() {
      this.$Message.info('正在查询')
      setTimeout(() => {
        this.$Message.success('查询成功')
      }, 1200)
    }
  },
  /**
   * ? life-hooks
   */
  created() {
    this.getClassList()
    this.getTableData()
    this.getModalTableData()
  }
}
</script>

<style lang="less" scoped>
.approve-other-plan {
  .table-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
  }
}
</style>
