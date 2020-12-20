export default {
  // ? 弹窗数据
  data() {
    return {
      inputTitle: '',
      inputContent: '',
      sourceList: [],
      imgList: []
    }
  },
  // ? 弹窗参数
  props: {
    addInputTitle: {
      type: String,
      default: ''
    },
    addInputContent: {
      type: String,
      default: ''
    },
    addImgList: {
      type: Array,
      default: () => []
    }
  },
  // ? 监视器 (当参数值为空时置空数据中的值)
  watch: {
    addInputTitle(newValue) {
      if (newValue === '') {
        this.inputTitle = newValue
      }
    },
    addInputContent(newValue) {
      if (newValue === '') {
        this.inputContent = newValue
      }
    },
    addImgList(newValue) {
      if (newValue.length === 0) {
        this.imgList = newValue
      }
    }
  },
  // ? 添加方案弹窗中的 方法 / 函数
  methods: {
    // ? 上传图片相关方法
    handleSuccess(res, file) {
      console.log(file)
      // file.url =
      //   'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
      // file.name = '7eb99afb9d5f317c912f08b5212fd69a'
    },
    handlePhotoSuccess(file) {
      this.sourceList.push(file)
      this.handlePreview()
      return false
    },
    handlePreview() {
      const thisComponent = this
      const reader = new FileReader()
      reader.readAsArrayBuffer(this.sourceList[0])

      reader.onload = function () {
        const bf = this.result
        const blob = new Blob([bf], {
          type: 'text/plain'
        })
        const str = URL.createObjectURL(blob)
        let url = str
        thisComponent.imgList.push(url)
      }
    },
    // ? inputTitle inputContent imgList
    getInputTitle() {
      this.$emit('getInputTitle', this.inputTitle)
    },
    getInputContent() {
      this.$emit('getInputContent', this.inputContent)
    },
    imgListLoad() {
      this.$emit('imgListLoad', this.imgList)
    }
  }
}