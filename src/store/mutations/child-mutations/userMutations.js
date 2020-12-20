export default {
  // !!用户相关的mutations
  getIsLogin(state, isLogin) {
    state.isLogin = isLogin
  },
  getAbleChangePwd(state, ableChangePwd) {
    state.ableChangePwd = ableChangePwd
  },
  // ! 用户相关的mutations (mock)
  getUid(state, uid) {
    state.uid = uid
  },
  getClassIds(state, classIds) {
    state.classIds = classIds
  },
  getTeacherName(state, teacherName) {
    state.teacherName = teacherName
  },
  getAttdanceNumber(state, attdanceNumber) {
    state.attdanceNumber = attdanceNumber
  },
  getUserBirthDate(state, userBirthDate) {
    state.userBirthDate = userBirthDate
  },
  getUserEntryTime(state, userEntryTime) {
    state.userEntryTime = userEntryTime
  },
  getSearchUser(state, searchUser) {
    state.searchUser = searchUser
  }
}