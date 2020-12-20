export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    handleSearch() {
      this.isLoading = true
      setTimeout(() => {
        this.$Message.success('查询成功')
        this.isLoading = false
      }, 600)
    }
  },
  created() {}
}