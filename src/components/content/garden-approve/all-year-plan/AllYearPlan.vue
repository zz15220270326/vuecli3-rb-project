<template>
  <div class="all-year-plan">
    <all-year-menu
      :yearTitle="yearTitle"
      :yearList="yearList"
      :commentStatus="commentStatus"
      @handleCommentButtons="handleCommentButtons"
      @selectYear="selectYear"
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
const AllYearMenu = () => import('./child-components/AllYearMenu')
const ApproveTable = () => import('../ApproveTable')
const ToComment = () => import('../common-modal/ToComment')
const IsCommented = () => import('../common-modal/IsCommented')

// ? mock-data
const mockYearList = require('@mock/garden-approve/mockYearList')
const mockAYList = require('@mock/garden-approve/mockAYList')

export default {
  name: 'AllYearPlan',
  components: {
    AllYearMenu,
    ApproveTable,
    ToComment,
    IsCommented
  },
  data: () => ({
    // ? menu-data
    yearTitle: '',
    yearList: [],
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
    selectYear(item) {
      this.yearTitle = item
    },
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
    // ? table-functions
    handleSelect(currentIndex, currentTag) {
      switch (currentTag) {
        case '点评':
          this.$Message.info('打开点评')
          this.modalTitle = '点评'
          this.handleSameOperations(currentIndex)
          this.isShowToComment = true
          break
        case '详情':
          this.$Message.info('详情')
          this.modalTitle = '详情'
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
      this.commentContent = 'undefined-后端获取的内容'
    },
    // ? modal functions
    submitComment() {
      this.$Message.info('查询成功')
    },
    cancelComment() {
      this.$Message.warning('您取消了本次操作')
    },
    // ? async functions
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
        const result = mockAYList
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
    }
  },
  created() {
    this.getYearList()
    this.getTableData()
  }
}
</script>

<style lang="less" scoped></style>
