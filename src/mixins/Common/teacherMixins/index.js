/*
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:43
 * @LastEditTime: 2020-12-20 13:16:25
 * @FilePath: \langyun_manager\src\mixins\Common\teacherMixins\index.js
 */
const mockTeacherData = require('@mock/Common/mockTeacherData')

export default {
  data() {
    return {
      teacherTitle: '',
      teacherList: []
    }
  },
  methods: {
    getTeacherListData() {
      setTimeout(() => {
        const result = mockTeacherData
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.teacherTitle = dataSource[0].info ? dataSource[0].info : ''
          this.teacherList = dataSource
        }
      }, 320)
    },
    selectTeacher(selectTeacher) {
      this.teacherTitle = selectTeacher
    }
  },
  created() {
    this.getTeacherListData()
  }
}
