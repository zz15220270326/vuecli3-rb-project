export default {
  // ? 改变搜索框内容
  getSearchContent (state, searchContent) {
    state.searchContent = searchContent
  },
  // ? 获取输入的学生姓名
  getSearchStudentName(state, searchStudentName) {
    state.searchStudentName = searchStudentName
  }
}