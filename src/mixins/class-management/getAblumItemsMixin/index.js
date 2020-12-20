// ? async-functions / mock-data
const mockAblumItems = require('@mock/class-management/mockAblumItems')

export default {
  data() {
    return {
      ablumItems: [],
      totalPage: 0,
      isLoading: false
    }
  },
  methods: {
    getAblumItems() {
      const result = mockAblumItems
      if (result.data) {
        const dataSource = result.data
        const ablumList = dataSource.ablums_list
        if (ablumList.length > 0) {
          this.totalPage = ablumList.length
          ablumList.map(item => {
            this.ablumItems.push({
              imgList: item.img_url_list,
              total: item.total,
              author: item.author,
              currentClass: item.current_class,
              isChecked: false,
              isShowOperations: false
            })
          })
        }
      }
    },
    handleItemShow(key) {
      this.ablumItems[key].isShowOperations = true
    },
    handleItemLeave(key) {
      this.ablumItems[key].isShowOperations = false
    }
  },
  created() {
    this.getAblumItems()
  }
}