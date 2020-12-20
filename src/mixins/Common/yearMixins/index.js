/*
 * @Author: 张先生
 * @Date: 2020-12-12 11:40:40
 * @LastEditTime: 2020-12-12 11:45:35
 * @FilePath: \langyun_manager\src\mixins\yearMixin\index.js
 */
const mockYearList = require('@mock/Common/mockYearList')

export default {
  data() {
    return {
      yearTitle: '',
      yearList: []
    }
  },
  methods: {
    getYearData() {
      setTimeout(() => {
        const result = mockYearList
        if (result.msg === 'Success' && result.data) {
          const yearList = result.data
          this.yearTitle = yearList[0].info ? yearList[0].info : ''
          this.yearList = yearList
        }
      }, 320)
    },
    selectYear(selectYear) {
      this.yearTitle = selectYear
    }
  },
  created() {
    this.getYearData()
  }
}
