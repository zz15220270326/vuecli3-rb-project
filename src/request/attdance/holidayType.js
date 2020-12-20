import {getRequest, postRequest, putRequest, deleteRequest} from '../request'

export function getHolidayType(gardenId) {
  return getRequest({
    url: '/workplace/teacher_checking/leave',
    params: {
      // ? 园所id int
      garden_id: gardenId
    }
  })
}

export function addHolidayType(gardenId, name, comment) {
  return postRequest('/workplace/teacher_checking/leave/', {
    // ? 园所id int
    garden_id: gardenId,
    // ? 假勤名称 string
    name,
    // ? 备注 string
    comment
  })
}

export function editHolidayType(id, gardenId, name, comment) {
  return putRequest('/workplace/teacher_checking/leave/' + id, {
    // ? 园所id int
    garden_id: gardenId,
    // ? 假勤名称 string
    name,
    // ? 备注 string
    comment
  })
}

export function deleteHolidayType(id) {
  return deleteRequest('/workplace/teacher_checking/leave/' + id)
}

