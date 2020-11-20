export default {
  // ! 用户相关的mutations
  getUid (state, uid) {
    state.uid = uid
  },
  getClassIds (state, classIds) {
    state.classIds = classIds
  },
  getTeacherName (state, teacherName) {
    state.teacherName = teacherName
  },
}