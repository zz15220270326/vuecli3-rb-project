/*
 * @Author: 张先生
 * @Date: 2020-12-12 20:21:12
 * @LastEditTime: 2020-12-12 20:28:48
 * @FilePath: \langyun_manager\src\mixins\semesterMixins\index.js
 */
const mockSemesterList = require('@mock/Common/mockSemesterList')

export default {
  data() {
    return {
      semesterTitle: '',
      semesterList: []
    }
  },
  methods: {
    getSemesterData() {
      setTimeout(() => {
        const result = mockSemesterList
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.semesterTitle = dataSource[0].info ? dataSource[0].info : ''
          this.semesterList = dataSource
        }
      }, 320)
    },
    selectSemester(selectSemester) {
      this.semesterTitle = selectSemester
    }
  },
  created() {
    this.getSemesterData()
  }
}
