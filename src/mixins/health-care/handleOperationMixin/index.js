export default {
  data() {
    return {
      selectItem: [],
    }
  },
  methods: {
    handleOperations(currentIndex) {
      switch (currentIndex) {
        case 0:
          // ? 查询表格操作
          this.tableIsLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.tableIsLoading = false
          }, 1000)
          break
        case 1:
          // ? 删除表格所选项操作
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择要删除的计划项')
          } else {
            this.$Modal.confirm({
              title: '删除表格中选中的信息',
              content: '您是否要删除这些已经选中的信息? 删除后数据无法恢复!',
              onOk: () => {
                let newDataList = this.dataList.filter(item1 =>
                  this.selectItem.every(item2 => item1.number !== item2.number)
                )
                this.dataList = newDataList
                this.$Message.error('删除成功')
              },
              onCancel() {
                this.$Message.warning('您取消了本次操作')
              }
            })
          }
          break
      }
    }
  }
}