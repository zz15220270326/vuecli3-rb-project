/*
 * @Author: 张先生
 * @Date: 2020-12-12 20:45:30
 * @LastEditTime: 2020-12-12 20:49:26
 * @FilePath: \langyun_manager\src\mixins\plan\commentStatusMixin\index.js
 */
const mockCommentStatusList = require('@mock/plan/mockCommentStatusList')

export default {
  data() {
    return {
      commentStatusTitle: '',
      commentStatusList: []
    }
  },
  methods: {
    getCommentStatusData() {
      setTimeout(() => {
        const result = mockCommentStatusList
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.commentStatusTitle = dataSource[0].info ? dataSource[0].info : ''
          this.commentStatusList = dataSource
        }
      }, 300)
    },
    selectCommentStatus(selectCommentStatus) {
      this.commentStatusTitle = selectCommentStatus
    }
  },
  created() {
    this.getCommentStatusData()
  }
}
