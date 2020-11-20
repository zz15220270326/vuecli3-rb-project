// 把标准时间转化为时间戳
export const dateToMs = (origonDate) => {
  let result = new Date(origonDate).getTime()
  return result
}

// 把时间戳转化为'年-月-日 时:分:秒'
export const transformTimeStamp = (timestamp) => {
  const date = new Date(timestamp)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = date.getDate() + ' '
  const h = date.getHours() + ':'
  const m = date.getMinutes()
  // const s = date.getSeconds(); // 秒
  const dateString = Y + M + D + h + m
  console.log('dateString', dateString) // > dateString 2020-01-10 18:52
  return dateString
}

// 把时间戳转化为'年-月'
export const transformToYM = (timestamp) => {
  const date = new Date(timestamp)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
  const result = (Y + M)
  return result
}

// 把时间戳转化为'年-月-日'
export const transformToYMD = (timestamp) => {
  const date = new Date(timestamp)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = (date.getDate() * 1 < 10) ? ('0' + date.getDate()) : date.getDate()
  const result = (Y + M + D)
  return result
}

// 获取某年某月的天数
export const getDays = (year, month) => {
  var d = new Date(year, month, 0)
  return d.getDate()
}

// 根据年-月-日获取星期几
export const getWeekDays = (dateString) => {
  let dateArray = dateString.split('-')
  let date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2])
  // return '周' + '日一二三四五六'.charAt(date.getDay())
  return '周' + '日一二三四五六'.charAt(date.getDay())
}
