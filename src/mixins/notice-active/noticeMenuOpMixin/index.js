export default {
  data() {
    return {
      inputKeyword: '',
      operations: [
        {
          tag: '查询',
          type: 'primary'
        },
        {
          tag: '删除',
          type: 'error'
        }
      ]
    }
  },
  methods: {
    handleOperations(key) {
      this.$emit('handleOperations', key)
    },
    addItem() {
      this.$emit('addItem')
    }
  }
}
