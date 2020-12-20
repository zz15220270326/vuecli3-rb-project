import { getRequest } from '../request'

// 测试函数
export function getAttendanceTableList () {
  return getRequest({
    // 自定义路径
    url: '',
    params: {}
  })
}

// 获取全员报表
export function getFullReport (uid, classIds, startTime, endTime, otherParams = {}) {
  return getRequest({
    url: '/workplace/teacher_checking/report/',
    params: {
      // int
      uid,
      // string
      class_ids: classIds,
      // string
      start_time: startTime,
      // string
      end_time: endTime,
      // choosable: teacher_name, page, page_size
      ...otherParams
    }
  })
}

// ? 获取个人报表
export function getPersonReport (uid, classIds, startTime, endTime, otherParams = {}) {
  return getRequest({
    url: '/workplace/teacher_checking/report/' + uid,
    params: {
      // int
      uid,
      // string
      class_ids: classIds,
      // string
      start_time: startTime,
      // string
      end_time: endTime,
      // choosable: teacher_name, page, page_size
      ...otherParams
    }
  })
}
