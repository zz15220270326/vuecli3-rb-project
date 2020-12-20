// ? async-functions / mock-data

export default {
  data() {
    return {
      showStepIndex: 0,
      // ? step1
      // ?? header
      selectUploadTypes: [{
          tag: '本地上传',
          type: 'primary',
          icon: 'ios-albums-outline'
        },
        {
          tag: '素材库',
          type: 'default',
          icon: 'ios-cloud-upload-outline'
        }
      ],
      typeIndex: 0,
      // ?? content
      renderList: [],
      // ?? footer
      footerOperations: [{
          tag: '下一步',
          type: 'primary',
          icon: 'md-arrow-forward'
        },
        {
          tag: '取消',
          type: 'error',
          icon: 'md-close'
        }
      ]
    }
  },
  methods: {
    // ? header-functions
    selectType(typeIndex) {
      this.typeIndex = typeIndex
      this.selectUploadTypes.forEach((item, index) => {
        index === typeIndex ? (item.type = 'primary') : (item.type = 'default')
      })
    },

    // ? content-functions
    handleLocalImg(localImgs) {
      for (let item of localImgs) {
        const renderItem = {}
        renderItem.src = item.src
        renderItem.isSetWrapper = false
        renderItem.content = ''
        renderItem.operations = [{
            tag: '删除',
            type: 'error',
            icon: 'ios-trash-outline'
          },
          {
            tag: '设置为封面',
            type: 'default',
            icon: 'ios-flower-outline'
          }
        ]
        this.renderList.push(renderItem)
      }
    },
    handleBaseImg(baseImgs) {
      console.log('select');
      baseImgs.map(item => {
        const renderItem = {}
        renderItem.src = item
        renderItem.isSetWrapper = false
        renderItem.content = ''
        renderItem.operations = [{
            tag: '删除',
            type: 'error',
            icon: 'ios-trash-outline'
          },
          {
            tag: '设置为封面',
            type: 'default',
            icon: 'ios-flower-outline'
          }
        ]
        this.renderList.push(renderItem)
      })
    },
    handleItemOperations(itemIndex, btnIndex) {
      switch (btnIndex) {
        case 0:
          this.renderList.splice(itemIndex, 1)
          this.$Message.error('删除成功')
          break
        case 1:
          this.renderList.forEach((item, index) => {
            index === itemIndex ? item.operations[1].type = 'primary' : item.operations[1].type = 'default'
          })
          this.$Message.info(`您将第${itemIndex + 1}张照片设置为了封面`)
          break
      }
    },
    addPlan() {
      this.$emit('addPlan')
    },

    // ? footer-functions
    handleFooterOperations(currentTag) {
      switch (currentTag) {
        case '取消':
          this.showStepIndex = 0
          this.footerOperations = [{
              tag: '下一步',
              type: 'primary',
              icon: 'md-arrow-forward'
            },
            {
              tag: '取消',
              type: 'error',
              icon: 'md-close'
            }
          ]
          this.renderList = []
          this.$emit('cancelUpload')
          break
        case '下一步':
          this.footerOperations = [{
              tag: '返回继续选择',
              type: 'primary',
              icon: 'md-arrow-back'
            },
            {
              tag: '取消',
              type: 'error',
              icon: 'md-close'
            },
            {
              tag: '确认上传',
              type: 'success',
              icon: 'md-bulb'
            }
          ]
          this.showStepIndex = 1
          break
        case '返回继续选择':
          this.footerOperations = [{
              tag: '下一步',
              type: 'primary',
              icon: 'md-arrow-forward'
            },
            {
              tag: '取消',
              type: 'error',
              icon: 'md-close'
            }
          ]
          this.showStepIndex = 0
          break
        case '确认上传':
          // ** 如果上传成功
          // setTimeout(() => {
          //   this.showStepIndex = 0
          //   this.$Message.success('上传成功')
          //   this.$emit('uploadSuccess')
          // }, 600);
          // !! 如果上传失败
          setTimeout(() => {
            this.showStepIndex = 0
            this.$Message.error('上传失败!请稍后再试')
            this.$emit('handleFailure')
          }, 500);
      }
    }
  },
  created() {}
}