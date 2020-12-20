import {getRequest, putRequest} from '../request'

// 获取考勤规则
export function getAttdanceRule (gardenId) {
  return getRequest({
    url: '/workplace/teacher_checking/rule',
    params: {
      // ? 园所id: (int) (eg: 19)
      garden_id: gardenId
    }
  })
}
// 编辑考勤规则
export function editAttdanceRule(
  ruleId,
  intervalMinutesBetweenAttendance,
  lateLimit,
  earlyLimit,
  absentEarlyLimit,
  absentLateLimit,
  overtimeMinLimit,
  reissueCardLimit
  ) {
    return putRequest(
      '/workplace/teacher_checking/rule/' + ruleId,
      {
        // ? 有效打卡最小间隔时间（分钟）
        interval_minutes_between_attendance: intervalMinutesBetweenAttendance,
        // ? 迟到界限（分钟）
        late_limit: lateLimit,
        // ? 早退界限（分钟）
        early_limit: earlyLimit,
        // ? 早退旷工界限（分钟）
        absent_early_limit: absentEarlyLimit,
        // ? 迟到旷工界限（分钟）
        absent_late_limit: absentLateLimit,
        // ? 	加班的最小时长（分钟）
        overtime_min_limit: overtimeMinLimit,
        // ? 一个月最多补卡次数（次）
        reissue_card_limit: reissueCardLimit
      }
  )
}