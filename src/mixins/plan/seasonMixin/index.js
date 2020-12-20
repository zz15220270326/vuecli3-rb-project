/*
 * @Author: 张先生
 * @Date: 2020-12-12 21:05:05
 * @LastEditTime: 2020-12-12 21:09:11
 * @FilePath: \langyun_manager\src\mixins\plan\seasonMixin\index.js
 */
const mockSeasonList = require('@mock/plan/mockSeasonList')

export default {
  data() {
    return {
      seasonTitle: '',
      seasonList: []
    }
  },
  methods: {
    getSeasonData() {
      setTimeout(() => {
        const result = mockSeasonList
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.seasonTitle = dataSource[0].info ? dataSource[0].info : ''
          this.seasonList = dataSource
        }
      }, 320)
    },
    selectSeason(selectSeason) {
      this.seasonTitle = selectSeason
    }
  },
  created() {
    this.getSeasonData()
  }
}
