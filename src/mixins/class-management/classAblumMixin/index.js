export default {
  data() {
    return {
      selectItem: [],
      isSelectAll: false,
      // ? modal-data
      modalTitle: '',
      // ?? add-modal
      isShowAddModal: false,
      addIndex: 0,
      // ?? upload-modal
      uploadModalTitle: '',
      isShowUploadModal: false,
      uploadIndex: 0,
      // ?? info-modal
      isShowInfoModal: false,
      infoContent: '',
      infoImgs: []
    }
  },
  methods: {
    // * menu-functions
    handleCheckbox(isChecked, index) {
      this.ablumItems[index].isChecked = isChecked
      const checkSelectAll = this.checkSelectAll(this.ablumItems)
      const checkCancelAll = this.checkCancelAll(this.ablumItems)
      if (checkSelectAll) {
        this.isSelectAll = true
        this.$Message.success('全部选中')
      }
      if (!checkSelectAll) {
        this.isSelectAll = false
      }
      if (checkCancelAll) {
        this.isSelectAll = false
        this.$Message.error('全部取消')
      }
    },
    checkSelectAll(array = []) {
      if (array.findIndex(target => target.isChecked === false) !== -1) {
        // ? 没有全选
        return false
      } else {
        // ? 全选
        return true
      }
    },
    checkCancelAll(array = []) {
      if (array.findIndex(target => target.isChecked === true) === -1) {
        return true
      } else {
        return false
      }
    },
    handleOperations(btnIndex, itemTag) {
      switch (btnIndex) {
        case 0:
          this.isLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.isLoading = false
          }, 500)
          break
        case 1:
          switch (itemTag) {
            case '全选':
              this.ablumItems.map(item => {
                item.isChecked = true
              })
              this.isSelectAll = true
              this.$Message.success('全选成功')
              break
            case '取消全选':
              this.ablumItems.map(item => {
                item.isChecked = false
              })
              this.isSelectAll = false
              this.$Message.error('取消全选')
              break
          }
          break
        case 2:
          // if (this.selectItem.length === 0) {
          //   this.$Message.warning('请选择要删除的选项')
          // } else {
          //   this.$Message.info('可以进行删除')
          // }
          if (this.checkCancelAll(this.ablumItems)) {
            this.$Message.warning('请选择要删除的选项')
          } else {
            this.$Modal.confirm({
              title: '删除',
              content: '确认删除? 删除后数据无法恢复',
              onOk: () => {
                this.ablumItems = this.ablumItems.filter(item => {
                  return item.isChecked === false
                })
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
    addPlan() {
      this.$Message.success('新建相册')
      this.modalTitle = '新建'
      this.isShowAddModal = true
    },
    handleAbOperations(key) {
      switch (key) {
        case 0:
          this.$Message.success('新建相册')
          this.modalTitle = '新建'
          this.isShowAddModal = true
          break
        case 1:
          this.$Message.info('上传图片')
          this.uploadModalTitle = '上传'
          this.isShowUploadModal = true
          break
      }
    },
    // ? content-functions
    showInfo(item) {
      this.modalTitle = item.author
      this.infoContent = item.currentClass
      // this.infoImgs = item.imgList
      this.infoImgs = []
      item.imgList.map(item => {
        this.infoImgs.push({
          src: item,
          isChecked: false,
          isShow: false
        })
      })
      this.isShowInfoModal = true
    },
    handleItemInfo(index) {
      switch (index) {
        case 0:
          this.uploadModalTitle = '上传'
          this.isShowUploadModal = true
          break
        case 1:
          this.$Message.info('删除图片')
          // ? 获取id进行删除
          this.$Modal.confirm({
            title: '删除',
            content: '确认删除?删除后数据无法恢复',
            onOk: () => {
              setTimeout(() => {
                this.$Message.success('删除成功')
              }, 500);
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
      }
    },
    itemBtnOperations(itemIndex, btnIndex) {
      switch (btnIndex) {
        case 0:
          // ? 上传(上传到指定id -> 根据itemIndex查找id)
          this.$Message.info(`上传第${itemIndex + 1}项`)
          this.uploadIndex = itemIndex
          this.uploadModalTitle = '上传'
          this.isShowUploadModal = true
          break
        case 1:
          // ? 编辑(在指定id上编辑 -> 根据itemIndex查找id)
          this.$Message.info(`编辑第${itemIndex + 1}项`)
          this.addIndex = itemIndex
          this.modalTitle = '编辑'
          this.isShowAddModal = true
          break
        case 2:
          // ? 编辑(删除指定id的物品)
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}项`,
            content: '是否删除? 删除后数据无法恢复',
            onOk: () => {
              setTimeout(() => {
                this.$Message.error('删除成功')
              }, 300);
            },
            onCancel: () => {
              this.$Message.success('您取消了本次操作')
            }
          })
          break
      }
    },
    // ? modal-functions
    cancelModal() {
      this.isShowAddModal = false
      this.isShowUploadModal = false
      this.$Message.warning('您关闭了本次会话')
    },
    cancelInfoModal() {
      this.isShowInfoModal = false
      this.$Message.warning('您关闭了本次会话')
    },
    addAblum() {
      this.$Message.success('请求成功')
      this.isShowAddModal = false
    },
    uploadFinish() {
      this.isShowUploadModal = false
    },
    // ??info-modal
    singleOpsShow(currentIndex) {
      this.infoImgs[currentIndex].isShow = true
    },
    singleOpsHide(currentIndex) {
      this.infoImgs[currentIndex].isShow = false
    }
  },
}