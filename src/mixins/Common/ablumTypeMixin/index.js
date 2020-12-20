/*
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:43
 * @LastEditTime: 2020-12-20 12:30:50
 * @FilePath: \langyun_manager\src\mixins\Common\ablumTypeMixin\index.js
 */
const mockAblumTypeList = require('@mock/Common/mockAblumTypeList')

export default {
  data() {
    return {
      ablumTypeTitle: '',
      ablumTypeList: []
    }
  },
  methods: {
    getAblumTypeData() {
      setTimeout(() => {
        const result = mockAblumTypeList
        if (result.data) {
          const dataSource = result.data
          this.ablumTypeTitle = dataSource[0].info ? dataSource[0].info : ''
          this.ablumTypeList = dataSource
        } else {
          debugger
        }
      }, 320)
    },
    selectAblumType(selectAblumType) {
      this.ablumTypeTitle = selectAblumType
    }
  },
  created() {
    this.getAblumTypeData()
  }
}
