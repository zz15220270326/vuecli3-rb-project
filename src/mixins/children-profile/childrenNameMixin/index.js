const mockChildrenNameList = require('@mock/children-profile/mockChildrenNameList')

export default {
  data() {
    return {
      selectName: '',
      childrenList: []
    }
  },
  methods: {
    getChildrenList() {
      setTimeout(() => {
        const result = mockChildrenNameList
        if (result.msg === 'Success' && result.data) {
          const dataList = result.data
          this.selectName = dataList[0].info ? dataList[0].info : ''
          this.childrenList = dataList
        }
      }, 500);
    },
    selectChildren(selectItem) {
      this.selectName = selectItem
    }
  },
  created() {
    this.getChildrenList()
  }
}