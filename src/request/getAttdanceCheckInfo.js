import {getRequest} from './request'

export const getAttdanceCheckInfo = (uid, date) => {
  return getRequest({
    url: '/workplace/teacher_checking/checkin_info',
    params: {
      teacher_uid: uid,
      date
    }
  })
}
