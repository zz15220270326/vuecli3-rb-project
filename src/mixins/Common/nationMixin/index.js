/*
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:43
 * @LastEditTime: 2020-12-20 12:55:16
 * @FilePath: \langyun_manager\src\mixins\Common\nationMixin\index.js
 */
const mockNationList = require('@mock/children-profile/mockNationList')

export default {
  data() {
    return {
      nation: '',
      nationList: []
    }
  },
  methods: {
    getNation() {
      setTimeout(() => {
        const result = mockNationList
        if (result.msg === 'Success' && result.data) {
          const nationList = result.data
          this.nation = nationList[0].info
          this.nationList = nationList
        }
      }, 300)
    }
  },
  created() {
    this.getNation()
  }
}
