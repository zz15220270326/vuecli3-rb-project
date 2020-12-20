import {getRequest} from '../request'

// ? 获取报表统计---姓名menu
export function getMenuInfo (uid) {
  return getRequest({
    url: '/workplace/garden_class/manage',
    params: {
      // uid: Number
      uid
    }
  })
}
// ? 获取全员报表统计--表格数据
export function getStaticTableInfo (uid, classIds, startTime, endTime, otherParams) {
  return getRequest({
    url: '/workplace/teacher_checking/statistics',
    params: {
      // uid: Number
      uid,
      // class_ids: string
      class_ids: classIds,
      // start_time: String: 'Y-M-D'
      start_time: startTime,
      // end_time: String: 'Y-M-D'
      end_time: endTime,
      /**
       * otherPrams:
       * teacher_name: String
       * page: Number
       */
      ...otherParams
    }
  })
}

// ? 获取个人报表同济--表格数据
export function getPersonalStaticInfo (uid, startTime, endTime) {
  return getRequest({
    // ? 请求路径: 需要加上用户的uid: Number
    url: '/workplace/teacher_checking/statistics/' + uid,
    params: {
      // ? start_time: string
      start_time: startTime,
      // ? end_time: string
      end_time: endTime
    }
  })
}
