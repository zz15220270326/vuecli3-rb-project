import {GET_SEARCH_STUDENT_NAME} from '@store/storeType'

export default {
  getSearchStudentName(context, searchStudentName) {
    context.commit(GET_SEARCH_STUDENT_NAME, searchStudentName)
  }
}