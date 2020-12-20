export default {
  data() {
    return {
      isLoading: false,
      // ? modal-functions
      modalTitle: '',
      // ??  add-modal
      isShowAddModal: false,
      // ??  edit-modal
      isShowEditModal: false,
      editTitle: '',
      editIntroduce: '',
      editIsSetTop: '否',
      editImg: '',
      editInputContent: '',
      // ??  info-modal
      isShowInfoModal: false,
      infoTitle: '',
      infoAvatar: '',
      infoAuthor: '',
      infoTime: '',
      infoContent: ''
    }
  },
  methods: {
    // ? menu-functions
    handleSearch() {
      this.isLoading = true
      setTimeout(() => {
        this.$Message.success('查询成功')
        this.isLoading = false
      }, 666)
    },
    handleCreate() {
      this.editTitle = ''
      this.editIntroduce = ''
      this.editIsSetTop = '否'
      this.editImg = ''
      this.editInputContent = ''

      this.$Message.info('创建草稿')
      this.modalTitle = '创建草稿'
      this.isShowAddModal = true
    },
    // ? content-functions
    handleUserOperations(itemIndex, btnTag) {
      switch (btnTag) {
        case '编辑':
          this.$Message.success('编辑内容')
          if (itemIndex < this.topList.length) {
            this.editTitle = this.topList[itemIndex].title
            this.editIntroduce = '传递的介绍内容'
            this.editIsSetTop = '是'
            this.editImg = this.topList[itemIndex].imgs
            this.editInputContent = this.topList[itemIndex].content
          } else {
            const index = itemIndex - this.topList.length
            this.editTitle = this.commonList[index].title
            this.editIntroduce = '传递的介绍内容'
            this.editIsSetTop = '否'
            this.editImg = this.commonList[index].imgs
            this.editInputContent = this.commonList[index].content
          }
          this.modalTitle = '编辑'
          this.isShowEditModal = true
          break
        case '删除':
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}条内容`,
            content: '是否删除? 删除后数据无法恢复',
            onOk: () => {
              setTimeout(() => {
                if (itemIndex < this.topList.length) {
                  this.topList.splice(itemIndex, 1)
                } else {
                  this.commonList.splice(itemIndex - this.topList.length, 1)
                }
                this.$Message.error('删除成功')
              }, 360);
            },
            onCancel: () => {
              this.$Message.success('您取消了本次的删除操作')
            }
          })
          break
        case '取消置顶':
          this.$Modal.confirm({
            title: '取消置顶',
            onOk: () => {
              setTimeout(() => {
                // const listInfo = this.topList[itemIndex]
                // this.topList.splice(itemIndex, 1)
                // this.commonList.unshift(listInfo)
                this.$Message.success('取消置顶成功')
              }, 360);
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
        case '置顶':
          this.$Modal.confirm({
            title: '置顶',
            onOk: () => {
              setTimeout(() => {
                // const listInfo = this.commonList[itemIndex]
                // this.commonList.splice(itemIndex, 1)
                // this.topList.unshift(listInfo)
                this.$Message.success('置顶成功')
              }, 360);
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
      }
    },
    handleItemOperations(itemIndex, btnTag) {
      switch (btnTag) {
        case '预览':
          this.showInfoModal(itemIndex)
          break
        case '详情':
          this.showInfoModal(itemIndex)
          break
        case '发布':
          this.$Modal.confirm({
            title: '发布内容',
            content: '确认发布?',
            onOk: () => {
              setTimeout(() => {
                if (itemIndex < this.topList.length) {
                  this.topList[itemIndex].userOperations.splice(0, 1)
                  this.topList[itemIndex].itemOperations = [{
                    tag: '详情',
                    type: 'info'
                  }]
                }
                this.$Message.success('发布成功')
              }, 500);
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
      }
    },
    showInfoModal(itemIndex) {
      this.$Message.info('查看详情信息')
      if (itemIndex < this.topList.length) {
        this.infoTitle = this.topList[itemIndex].title
        this.infoAvatar = this.topList[itemIndex].avatar
        this.infoAuthor = this.topList[itemIndex].author
        this.infoTime = this.topList[itemIndex].time
        this.infoContent = this.topList[itemIndex].content
      } else {
        let index = itemIndex - this.topList.length
        this.infoTitle = this.commonList[index].title
        this.infoAvatar = this.commonList[index].avatar
        this.infoAuthor = this.commonList[index].author
        this.infoTime = this.commonList[index].time
        this.infoContent = this.commonList[index].content
      }
      this.modalTitle = '详情'
      this.isShowInfoModal = true
      /**
       * infoTitle: '',
      infoAvatar: '',
      infoAuthor: '',
      infoTime: '',
      infoContent: ''
       */
    }
  }
}