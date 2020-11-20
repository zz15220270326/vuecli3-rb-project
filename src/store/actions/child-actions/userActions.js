/***
 * ! 用户相关的actions
 */
import {
  GET_UID,
  GET_CLASS_IDS,
  GET_TEACHER_NAME
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
}