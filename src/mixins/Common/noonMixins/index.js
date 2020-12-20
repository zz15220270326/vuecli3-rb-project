/*
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:43
 * @LastEditTime: 2020-12-20 12:58:57
 * @FilePath: \langyun_manager\src\mixins\Common\noonMixins\index.js
 */
const mockNoonList = require('@mock/Common/mockNoonList')

export default {
  data() {
    return {
      noonList: [],
      currentIndex: 0
    }
  },
  methods: {
    getNoonData() {
      const result = mockNoonList
      if (result.msg === 'Success' && result.data) {
        result.data.map((item, index) => {
          index === 0
            ? this.noonList.push({
                tag: item.info,
                key: item.key,
                type: 'primary'
              })
            : this.noonList.push({
                tag: item.info,
                key: item.key,
                type: 'default'
              })
        })
      }
    },
    selectNoon(currentIndex) {
      this.currentIndex = currentIndex
      console.log(currentIndex)
      this.noonList.forEach((item, index) => {
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      })
    }
  },
  created() {
    this.getNoonData()
  }
}
