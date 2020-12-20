/***
 * ! 用户相关的actions
 */
import {
  GET_UID,
  GET_CLASS_IDS,
  GET_TEACHER_NAME,
  GET_ATTDANCE_NUMBER,
  GET_SEARCH_USER
} from '@store/storeType'

export default {
  getUid (context, paramUid) {
    context.commit(GET_UID, paramUid)
  },
  getClassIds (context, selectClassIds) {
    context.commit(GET_CLASS_IDS, selectClassIds)
  },
  getTeacherName (context, inputTeacherName) {
    context.commit(GET_TEACHER_NAME, inputTeacherName)
  },
  getAttdanceNumber(context, attdanceNumber) {
    context.commit(GET_ATTDANCE_NUMBER, attdanceNumber)
  },
  getSearchUser(context, searchUser) {
    context.commit(GET_SEARCH_USER, searchUser)
  }
}