/*
 * @Author: 张先生
 * @Date: 2020-12-13 00:00:52
 * @LastEditTime: 2020-12-13 00:10:09
 * @FilePath: \langyun_manager\src\mixins\workDaysMixins\index.js
 */
const mockWorkDays = require('@mock/Common/mockWorkDays')

export default {
  data() {
    return {
      workDayList: []
    }
  },
  methods: {
    getWorkDays() {
      const result = mockWorkDays
      if (result.msg === 'Success' && result.data) {
        const dataSource = result.data
        dataSource.map((item, index) => {
          this.workDayList.push({
            tag: item.info,
            key: item.key,
            type: index === 0 ? 'warning' : 'primary'
          })
        })
      }
    },
    selectWorkDay(currentIndex) {
      this.workDayList.forEach((item, index) => {
        index === currentIndex
          ? (item.type = 'warning')
          : (item.type = 'primary')
      })
    }
  },
  created() {
    this.getWorkDays()
  }
}
