export default {
  data() {
    return {
      // ? table-data
      selectItem: [],
      // ? modal-data
      modalTitle: '',
      // ?? add-modal
      isShowAddModal: false,
      // ?? edit-modal
      isShowEditModal: false,
      editClassName: '',
      editChildrenCount: 0,
      editEntryTime: '',
      editGrade: '',
      editTeachers: '',
      editSlogan: ''
    }
  },
  methods: {
    getSelectItem(selectItem) {
      this.selectItem = selectItem
    },
    handleOperations(currentIndex) {
      switch (currentIndex) {
        case 0:
          this.tableIsLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.tableIsLoading = false
          }, 500)
          break
        case 1:
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择你要删除的内容')
          } else {
            this.$Modal.confirm({
              title: '删除选中的内容',
              content: '是否删除? 删除后数据无法恢复',
              onOk: () => {
                let newDataList = this.dataList.filter(item1 =>
                  this.selectItem.every(item2 => item1.number !== item2.number)
                )
                this.dataList = newDataList
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
    handleTableItem(itemIndex, btnIndex) {
      switch (btnIndex) {
        case 0:
          this.$Modal.confirm({
            title: '升班',
            content: '确认升班?',
            onOk: () => {
              switch (this.dataList[itemIndex].grade) {
                case '小班':
                  this.dataList[itemIndex].grade = '中班'
                  break
                case '中班':
                  this.dataList[itemIndex].grade = '大班'
                  break
                case '大班':
                  this.$Message.error('大班已经是最高等级, 无法升班')
                  break
              }
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
        case 1:
          this.$Message.info(`编辑第${itemIndex + 1}条内容`);
          (this.editClassName = this.dataList[itemIndex].className),
          (this.editChildrenCount = this.dataList[itemIndex].childrenCount),
          (this.editEntryTime = this.dataList[itemIndex].entryTime),
          (this.editGrade = this.dataList[itemIndex].grade),
          (this.editTeachers = this.dataList[itemIndex].teachers),
          this.editSlogan = '后台传递的slogan'
          this.modalTitle = '编辑'
          this.isShowEditModal = true
          break
        case 2:
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}条内容`,
            content: '是否删除, 删除后数据无法恢复',
            onOk: () => {
              setTimeout(() => {
                this.dataList.splice(itemIndex, 1)
                this.$Message.error('删除成功')
              }, 500)
            },
            onCancel: () => {
              this.$Message.success('您取消了本次操作')
            }
          })
          break
      }
    },
    handleCreate() {
      (this.editClassName = ''),
      (this.editChildrenCount = 0),
      (this.editEntryTime = ''),
      (this.editGrade = ''),
      (this.editTeachers = ''),
      (this.editSlogan = '')
      this.modalTitle = '添加班级'
      this.isShowAddModal = true
    },
    // ? modal-functions
    handleCancelModal() {
      this.$Message.warning('您关闭了本次对话')
    }
  }
}