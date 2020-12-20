<template>
  <div class="daily-add-content">
    <add-menu @searchTable="searchTable" @handleOperations="handleOperations" />
    <div class="table-content">
      <h-b-table
        :titleList="titleList"
        :dataList="dataList"
        :tableIsLoading="tableIsLoading"
        @getTable="getTable"
      />
    </div>
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? import components
const AddMenu = () => import('./add-content/AddMenu')
const HBTable = () => import('@HealthBorder/HBTable')
const DividePage = () => import('@common/divide-page/DividePage')
// ? import mixins
import addModalTableMixin from '@mixins/health-border/addModalTableMixin'

export default {
  name: 'DailyAddContent',

  components: {
    AddMenu,
    HBTable,
    DividePage
  },

  mixins: [addModalTableMixin],

  data: () => ({
    currentTable: {}
  }),

  props: {},

  computed: {},

  methods: {
    // ? menu-functions
    searchTable() {
      this.$Message.info('正在查询表格')
      this.tableIsLoading = true
      this.getAddTableData()
      setTimeout(() => {
        this.$Message.success('查询成功')
        this.tableIsLoading = false
      }, 800)
    },
    handleOperations(btnIndex) {
      switch (btnIndex) {
        case 0:
          this.printTable()
          break
        case 1:
          if (this.currentTable !== {}) {
            this.currentTable.exportCsv({
              filename: '当前全部表格数据',
              original: false
            })
          }
          break
      }
    },
    // ? table-functions
    printTable() {
      const newWin = window.open('') //新打开一个空窗口
      const title = '哈哈哈哈哈'
      if (this.currentTable !== {}) {
        // ${this.currentTable.outerHTML}
        console.log(this.currentTable)
        newWin.document.write(`
          <html>
            <head>
              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width,initial-scale=1.0">
              <title>
                ${title}
              </title>
            </head>
            <body>
              ${this.currentTable.innerHTML}
            </body>
          </html>`)
        newWin.document.close() //在IE浏览器中使用必须添加这一句
        newWin.focus() //在IE浏览器中使用必须添加这一句

        newWin.print() //打印
        newWin.close() //关闭窗口
      }
    },
    getTable(currentTable) {
      this.currentTable = currentTable
    }
  }
}
</script>

<style lang="less" scoped>
.daily-add-content {
  height: 30rem;
  overflow-y: scroll;
  background-color: pink;
  .table-content {
    margin-top: 5/4rem;
  }
}
</style>
