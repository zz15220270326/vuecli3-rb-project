<template>
<div class="content">
  <!-- 根据月份刷新考勤表 -->
  <!-- :show-header="false" -->
  <Table border highlight-row ref="currentRowTable" :row-class-name="renderRow" :columns="dayList" :data="list1" size="small" />
  <Table :show-header="false" border highlight-row ref="currentRowTable" :row-class-name="renderRow" :columns="dayList" :data="list2" size="small" />
  <!-- <Table border :data="attdanceList" size="small" /> -->
</div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    dayList: {
      type: Array,
      default: () => []
    },
    list1: {
      type: Array,
      default: () => []
    },
    list2: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    renderRow (row, index) {
      if (index === 0) {
        return 'render-row'
      }
      return ''
    },
    rowClick () {
      /* @click.native="rowClick"  */
      console.log(this.$refs.currentRowTable.data)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  background-color: #f6f6f6;
  height: 70vh;
  .ivu-table {
    .render-row {
      td {
        background-color: #2db7f5 !important;
        color: #fff !important;
      }
    }
  }
}
// .ivu-table .render-row td{
//   background-color: #2db7f5;
//   color: #fff;
// }
</style>
