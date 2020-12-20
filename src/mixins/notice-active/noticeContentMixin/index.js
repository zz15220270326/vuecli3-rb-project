export default {
  data() {
    return {
      selectAllText: '全部选择',
      checkAllGroup: [],
      checkAll: false
    }
  },
  props: {
    title: {
      type: String,
      default: '加载中。。。'
    },
    dataList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    avatar() {
      return this.$store.state.avatar
    }
  },
  methods: {
    handleAllItems() {
      if (this.checkAll) {
        for (let index in this.dataList) {
          this.checkAllGroup.push(index * 1)
        }
        this.selectAllText = '取消全选'
        this.$emit('handleAllItems', this.dataList)
      } else {
        this.checkAllGroup = []
        this.selectAllText = '全部选择'
        this.$emit('handleAllItems', [])
      }
    },
    selectSingleItem(dataList) {
      if (dataList.length === this.dataList.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
      this.$emit('selectSingleItem', dataList)
    },
    deleteItem(key) {
      this.$emit('deleteItem', key)
    },
    handleOperation(opKey, key) {
      this.$emit('handleOperation', opKey, key)
    }
  }
}