export default {
  data() {
    return {
      inputTitle: '',
      inputIntroduce: '',
      isSetTop: '否',
      file: [],
      img: '',
      inputContent: '',
      editorOption: {
        placeholder: '编辑文章内容'
      }
    }
  },
  props: {
    editTitle: {
      type: String,
      default: ''
    },
    editIntroduce: {
      type: String,
      default: ''
    },
    editIsSetTop: {
      type: String,
      default: ''
    },
    editImg: {
      type: String,
      default: ''
    },
    editInputContent: {
      type: String,
      default: ''
    }
  },
  watch: {
    editTitle(newValue) {
      this.inputTitle = newValue
    },
    editIntroduce(newValue) {
      this.inputIntroduce = newValue
    },
    editIsSetTop(newValue) {
      this.isSetTop = newValue
    },
    editImg(newValue) {
      this.img = newValue
    },
    editInputContent(newValue) {
      this.inputContent = newValue
    }
  },
  methods: {
    handleOnSuccess(file) {
      this.file.push(file)
      console.log(this.file)
      this.handlePreview()
      return false
    },
    handlePreview() {
      const self = this
      const reader = new FileReader()
      reader.readAsArrayBuffer(this.file[0])
      reader.onload = function () {
        const bf = this.result
        const blob = new Blob([bf], {
          type: 'text/plain'
        })
        const str = URL.createObjectURL(blob)
        console.log(str)
        self.img = str
      }
    },
    getInputContent({
      text
    }) {
      this.inputContent = text
      // { html, text }
      // this.inputContent = text
    }
  }
}