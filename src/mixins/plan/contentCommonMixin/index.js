/*
 * @Author: 张先生
 * @Date: 2020-12-12 19:50:33
 * @LastEditTime: 2020-12-18 21:35:46
 * @FilePath: \langyun_manager\src\mixins\plan\contentCommonMixin\index.js
 */
export default {
  data() {
    return {
      // ? menu-input
      inputContent: '',
      // ? table-data
      selectItem: [],
      // ? modal-data
      modalTitle: '',
      firstTitle: '',
      secondTitle: '',
      // ?? info-modal
      isShowDetailModal: false,
      // ?? create-modal
      isShowCreateModal: false
    }
  },
  methods: {
    // ? menu-functions
    inputContentChange(inputValue) {
      this.inputContent = inputValue
    },
    handleAll(info) {
      switch (info) {
        case '查询':
          this.tableIsLoading = true
          setTimeout(() => {
            this.tableIsLoading = false
            this.$Message.success('查询计划成功')
          }, 800)
          break
        case '删除':
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择要删除的计划项')
          } else {
            this.$Modal.confirm({
              title: '删除表格中选中的信息',
              content: '您是否要删除这些已经选中的信息? 删除后数据无法恢复!',
              onOk: () => {
                let newdataList = this.dataList.filter(item1 =>
                  this.selectItem.every(item2 => item1.number !== item2.number)
                )
                this.dataList = newdataList
                this.$Message.error('删除成功')
              },
              onCancel: () => {
                this.$Message.warning('您取消了本次操作')
              }
            })
          }
          break
      }
    },
    // ? table-functions
    getSelectItem(selection) {
      this.selectItem = selection
    },
    handleOperations(tag, selectIndex, table) {
      switch (tag) {
        case '详情':
          this.$Message.info('查看详情')
          setTimeout(() => {
            this.firstTitle = this.dataList[selectIndex].planName
            this.secondTitle = this.dataList[selectIndex].createTime
            this.modalTitle = '详情'
            this.isShowDetailModal = true
          }, 300)
          break
        case '编辑':
          this.$Message.info('编辑内容')
          setTimeout(() => {
            // ? 对于教师计划
            if (this.getTeachPlanArrangement()) {
              this.getTeachPlanArrangement()
            }
            // ? 如果有的话就执行这行代码
            this.modalTitle = '编辑'
            this.isShowCreateModal = true
          }, 300)
          break
        case '导出':
          this.$Message.success(`导出第${selectIndex + 1}条内容`)
          table.exportCsv({
            filename: `表格第${selectIndex + 1}条数据`,
            data: this.dataList[selectIndex],
            original: false
          })
          break
        case '删除':
          this.$Modal.confirm({
            title: '删除这一条信息',
            content: '您是否要删除这一条记录? 删除后数据无法恢复!',
            onOk: () => {
              this.dataList.splice(selectIndex, 1)
              this.$Message.success('删除成功')
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
      }
    },
    submitCreatePlan() {
      this.mockInitData()
      this.$Message.success('提交信息成功')
    },
    cancelCreatePlan() {
      this.$Message.warning('您取消了本次操作')
    }
  }
}
