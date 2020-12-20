// ? async-functions / mock-data

export default {
  data() {
    return {
      // ? 记录选择的列表
      selectList: []
    }
  },
  methods: {
    handleSelect() {
      this.currentImgList.map(item => {
        if (item.isChecked) {
          this.selectList.push(item.src)
        }
      })
      this.$Message.success('选择图片成功')
      this.$emit('handleBaseImg', this.selectList)
      this.selectList = []
      this.currentImgList.map(item => {
        item.isChecked = false
      })
    }
  },
  created() {}
}