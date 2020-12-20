export default {
  data() {
    return {
      operations: [{
          tag: '查询',
          type: 'primary'
        },
        {
          tag: '全选',
          type: 'info'
        },
        {
          tag: '删除',
          type: 'error'
        }
      ],
      abOperations: [{
          tag: '新建相册',
          type: 'warning',
          icon: 'md-add'
        },
        {
          tag: '上传图片',
          type: 'warning',
          icon: 'ios-cloud-upload'
        },
      ]
    }
  },
  props: {
    isSelectAll: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    isSelectAll(newValue) {
      if (newValue === true) {
        this.operations[1].tag = '取消全选'
      } else {
        this.operations[1].tag = '全选'
      }
    }
  },
  methods: {
    handleOperations(key, tag) {
      this.$emit('handleOperations', key, tag)
    },
    handleAbOperations(key) {
      this.$emit('handleAbOperations', key)
    }
  },
  created() {}
}