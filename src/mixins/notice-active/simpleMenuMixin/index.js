export default {
  data() {
    return {
      inputKeyword: ''
    }
  },
  computed: {},
  methods: {
    getKeyword() {
      this.$emit('getKeyword', this.inputKeyword)
    },
    handleSearch() {
      if (this.inputKeyword === '') {
        this.$Message.warning('请输入搜索内容')
      } else {
        this.$emit('handleSearch')
      }
    }
  }
}