export default {
  data() {
    return {
      // ableDeleted: false,
      selectItems: [],
      // ? modal-data
      modalTitle: '',
      // ??add-modal
      isShowAddModal: false,
      addInputTitle: '',
      addInputContent: '',
      addImgList: [],
      // ?? info-modal
      isShowInfoModal: false,
      infoItem: {}
    }
  },
  // ? methods
  methods: {
    // ?? menu-functions
    handleOperations(btnIndex) {
      switch (btnIndex) {
        case 0:
          this.isLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.isLoading = false
          }, 800)
          break
        case 1:
          if (this.selectItems.length === 0) {
            this.$Message.warning('请先选择要删除的内容')
          } else {
            this.$Modal.confirm({
              title: '删除选中的内容',
              content: '是否删除? 删除后数据无法恢复',
              onOk: () => {
                this.$Message.error('删除成功')
              },
              onCancel: () => {
                this.$Message.success('您取消了本次操作')
              }
            })
          }
          break
      }
    },
    addItem() {
      this.modalTitle = '创建通知草稿'
      this.isShowAddModal = true
    },

    // ?? items-functions
    handleAllItems(selectItems) {
      this.selectItems = selectItems
    },
    selectSingleItem(selectItems) {
      this.selectItems = selectItems
    },
    getAddInputTitle(inputTitle) {
      this.addInputTitle = inputTitle
    },
    getAddInputContent(inputContent) {
      this.addInputContent = inputContent
    },
    addImgListLoad(imgList) {
      this.addImgList = imgList
    },

    // ?? modal-functions
    confirmAdd() {
      if (this.addInputTitle === '') {
        this.$Message.error('上传失败! 标题不能为空')
        return
      }
      if (this.addInputContent === '') {
        this.$Message.error('上传失败! 内容不能为空')
        return
      }
      let newItem = {
        title: this.addInputTitle,
        content: this.addInputContent,
        img: this.addImgList,
        avatar: this.avatar,
        charger: this.identify,
        uid: this.uid,
        type: '园务通知',
        color: 'orange',
        time: this.thisYear + '-' + this.thisMonth + '-' + this.thisDay,
        operations: [{
            tag: '预览',
            type: 'info'
          },
          {
            tag: '发布',
            type: 'success'
          }
        ],
        readStatus: '0/0'
      }
      this.dataList.unshift(newItem)

      this.addInputTitle = ''
      this.addInputContent = ''
      this.addImgList = []
      this.$Message.success('上传成功')
    },
    cancelAdd() {
      this.$Message.warning('您取消了本次操作')
    },
    // ?? operate-item
    deleteItem(key) {
      this.$Modal.confirm({
        title: `删除第${key + 1}条内容`,
        content: '是否删除? 删除后数据无法恢复',
        onOk: () => {
          this.dataList.splice(key, 1)
          this.$Message.error(`成功删除第${key + 1}条内容!`)
        },
        onCancel: () => {
          this.$Message.success('您取消了本次操作')
        }
      })
    },
    handleOperation(btnIndex, itemIndex) {
      switch (btnIndex) {
        case 0:
          // ? 显示详情
          this.infoItem = this.dataList[itemIndex]
          this.modalTitle = '详情'
          this.isShowInfoModal = true
          break
        case 1:
          // ? (发布 ??)
          this.$Message.success('发布信息成功')
          this.dataList[itemIndex].operations = [{
            tag: '查看详情',
            type: 'info'
          }]
          break
      }
    }
  }
}