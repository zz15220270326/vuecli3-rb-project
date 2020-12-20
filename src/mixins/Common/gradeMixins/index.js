/*
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:43
 * @LastEditTime: 2020-12-20 12:51:42
 * @FilePath: \langyun_manager\src\mixins\Common\gradeMixins\index.js
 */
const mockGradeData = require('@mock/Common/mockGradeData')

export default {
  data() {
    return {
      gradeTitle: '',
      gradeList: []
    }
  },
  methods: {
    getGradeData() {
      setTimeout(() => {
        const result = mockGradeData
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.gradeTitle = dataSource[0].info ? dataSource[0].info : ''
          this.gradeList = dataSource
        }
      }, 300)
    },
    selectGrade(selectGrade) {
      this.gradeTitle = selectGrade
    }
  },
  created() {
    this.getGradeData()
  }
}
