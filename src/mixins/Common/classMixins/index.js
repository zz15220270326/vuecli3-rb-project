/*
 * @Author: 张先生
 * @Date: 2020-12-12 10:54:15
 * @LastEditTime: 2020-12-20 12:33:33
 * @FilePath: \langyun_manager\src\mixins\Common\classMixins\index.js
 */
// ? async function / mock-data
const mockClassList = require('@mock/Common/mockClassList')

export default {
  data() {
    return {
      classTitle: '',
      classList: []
    }
  },
  methods: {
    getClassList() {
      setTimeout(() => {
        const result = mockClassList
        if (result.msg === 'Success' && result.data) {
          const classList = result.data
          this.classTitle = classList[0].info ? classList[0].info : ''
          this.classList = classList
        }
      }, 300)
    },
    selectClass(selectClass) {
      this.classTitle = selectClass
    }
  },
  created() {
    this.getClassList()
  }
}
