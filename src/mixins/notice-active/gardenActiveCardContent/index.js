export default {
  data() {
    return {
      isCheckedAll: false,
      selectAllText: '全部选择',
      checkAll: false,
      checkAllGroup: []
    }
  },
  props: {
    topList: {
      type: Array,
      default: () => []
    },
    commonList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    totalList() {
      return [...this.topList, ...this.commonList]
    }
  },
  methods: {
    handleUserOperations(itemIndex, currentTag) {
      this.$emit('handleUserOperations', itemIndex, currentTag)
    },
    handleItemOperations(itemIndex, currentTag) {
      this.$emit('handleItemOperations', itemIndex, currentTag)
    },
    handleAllItems() {
      if (this.checkAll) {
        for (let index in this.totalList) {
          this.checkAllGroup.push(index * 1)
        }
        this.selectAllText = '取消全选'
        this.$emit('handleAllItems', this.totalList)
      } else {
        this.checkAllGroup = []
        this.selectAllText = '全部选择'
        this.$emit('handleAllItems', [])
      }
    },
    selectSingleItem(totalList) {
      if (totalList.length === this.totalList.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
      this.$emit('selectSingleItem', totalList)
    }
  }
}