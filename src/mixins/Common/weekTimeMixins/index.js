/*
 * @Author: 张先生
 * @Date: 2020-12-12 20:35:18
 * @LastEditTime: 2020-12-12 20:39:58
 * @FilePath: \langyun_manager\src\mixins\weekTimeMixins\index.js
 */
const mockWeekTimeList = require('@mock/Common/mockWeekTimeList')

export default {
  data() {
    return {
      weekTimeTitle: '',
      weekTimeList: []
    }
  },
  methods: {
    getWeekTimeData() {
      setTimeout(() => {
        const result = mockWeekTimeList
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.weekTimeTitle = dataSource[0].info ? dataSource[0].info : ''
          this.weekTimeList = dataSource
        }
      }, 360)
    },
    selectWeekTime(selectWeekTime) {
      this.weekTimeTitle = selectWeekTime
    }
  },
  created() {
    this.getWeekTimeData()
  }
}
